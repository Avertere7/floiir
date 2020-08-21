﻿namespace WebApi.Extensions.InvitationKey
{
    public static class StringExtensions
    {

        /// <summary>
        /// Checks if invitation key length is valid
        /// </summary>
        public static bool IsInvKeyValid(this string invitationKey)
        {
            return invitationKey.Length == 10;
        }
    }
}
