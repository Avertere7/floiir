﻿using System;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Internal
{

    public enum AppHistoryType
    {
        Add,
        Update,
        Delete
    }

    public class AppHistory
    {

        public AppHistory() { }

        public AppHistory(AppTable tableId, AppHistoryType type, int userId, string userName, int? elementId = null, string description = null)
        {
            TableId = tableId;
            Type = type;
            UserId = userId;
            UserName = userName;
            DateTime = DateTime.Now;
            ElementId = elementId;
            if (description != null)
            {
                if (description.Length > 199) description = description.Substring(0, 199);
                Description = description;
            }
        }

        public int Id { get; set; }
        public AppTable TableId { get; set; }
        public int? ElementId { get; set; }
        public AppHistoryType Type { get; set; }
        public int UserId { get; set; }
        [StringLength(50)]
        public string UserName { get; set; }
        public DateTime DateTime { get; set; }
        [StringLength(200)]
        public string Description { get; set; }
    }
}