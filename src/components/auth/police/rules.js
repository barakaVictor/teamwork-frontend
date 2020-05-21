 /**
  * The rules define the rights attached to each user group.
  * This app has two user groups namely admins and users each with
  * varying rights on the system
  */

const canDo = (user, obj) => {
    if (!user.id || !obj.created_by) return false;
    return user.id === obj.created_by;
}

const rules= {
    user:{
        static: [
            "feed:view",
            "article:add",
            "gif:add",
        ],
        dynamic: {
            "article:delete": ({user, article}) => {
                return canDo(user, article);
            },
            "article:edit": ({user, article}) => {
                return canDo(user, article);
            },
            "gif:delete": ({user, gif}) => {
                return canDo(user, gif);
            },
            "gif:edit": ({user, gif}) => {
                return canDo(user, gif)
            }
        }
    },
    admin:{
        static: [
            "feed:view",
            "user:add",
            "users:view",
            "users:edit",
            "users:delete",
            "article:delete",
            "article:edit",
            "article:add",
            "gif:add",
            "gif:delete",
            "gif:edit"
        ]
    }
}

export default rules;