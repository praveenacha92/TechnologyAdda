namespace TechnologyADDA.Shared
{
    public static class StoredProcedures
    {
        public static string sp_CreateRole = "";
        public static string sp_GetRoles = "sp_GetRoles";
        public static string sp_CreateUserRegistation = "sp_CreateUserRegistation";
        public static string sp_UserLogin = "sp_UserLogin";

        public static string sp_CreateMainSkill = "sp_InsertMainSkill";
        public static string sp_GetMainSkill = "sp_GetMainSkill";
        public static string sp_UpdateMainSkill = "sp_UpdateMainSkill";
        public static string sp_DeleteMainSkill = "sp_DeleteMainSkill";

        // Accocunt
        public static string sp_CreateUserAccount = "sp_CreateUserAccount";
        public static string sp_GetUserAccount = "sp_GetUserAccount";
        public static string sp_UpdateUserAccount = "sp_UpdateUserAccount";
        public static string sp_DeleteUserAccount = "sp_DeleteUserAccount";
    }
}
