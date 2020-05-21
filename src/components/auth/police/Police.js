import rules from "./rules";

 /**
  * 
  * @param {Object} rules  - an object containing permission definitions for each role 
  * @param {String} role - the role against which to check for permissions
  * @param {String} action - the action to be performed on a specified object
  * @param {Object} data - an object containing the current user and the object they are trying to manipulate
  * 
  * This function runs through the defined permissions in the rules object
  * and  checks whether the active user has the right permissions to execute
  * actions on an object. If the rules checkout, it allows the action else it 
  * prohibits the action.
  */

const check = (rules, role, action, data) => {
  const permissions = rules[role];
  if (!permissions) {
    // role is not present in the rules
    return false;
  }

  const staticPermissions = permissions.static;

  if (staticPermissions && staticPermissions.includes(action)) {
    return true;
  }

  const dynamicPermissions = permissions.dynamic;

  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];
    if (!permissionCondition) {
      // dynamic rule not provided for action
      return false;
    }

    return permissionCondition(data);
  }
  return false;
};

const Enforce = props => {
    return check(rules, props.role, props.perform, props.data)
    ? props.yes()
    : props.no();
}

Enforce.defaultProps = {
  yes: () => null,
  no: () => null
};

export default Enforce;