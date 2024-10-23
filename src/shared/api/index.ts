const BASE_URL = 'http://127.0.0.1:8000/api';

export enum EndpointKeys {
    login = 'login',
    refresh = 'refresh',
    logout = 'logout',
    me = 'me',
    activity_types = 'activity_types',
    automation_actions = 'automation_actions',
    automation_conditions = 'automation_conditions',
    automations = 'automations',
    automation_editors = 'automation_editors',
    categories = 'categories',
    chats = 'chats',
    chat_members = 'chat_members',
    chat_messages = 'chat_messages',
    chat_moderators = 'chat_moderators',
    comparison_types = 'comparison_types',
    condition_objects = 'condition_objects',
    condition_value_objects = 'condition_value_objects',
    divisions = 'divisions',
    events = 'events',
    event_members = 'event_members',
    event_repeats = 'event_repeats',
    execution_statuses = 'execution_statuses',
    files = 'files',
    file_types = 'file_types',
    messages = 'messages',
    message_attachments = 'message_attachments',
    message_types = 'message_types',
    notifications = 'notifications',
    organizations = 'organizations',
    organization_employees = 'organization_employees',
    posts = 'posts',
    projects = 'projects',
    project_members = 'project_members',
    roles = 'roles',
    tags = 'tags',
    task_attachments = 'task_attachments',
    task_comments = 'task_comments',
    tasks = 'tasks',
    task_performers = 'task_performers',
    task_priorities = 'task_priorities',
    task_tags = 'task_tags',
    users = 'users',
};

export const endpoints: Record<EndpointKeys, string> = {
    login: `${BASE_URL}/auth/login`,
    refresh: `${BASE_URL}/auth/refresh`,
    logout: `${BASE_URL}/auth/logout`,
    me: `${BASE_URL}/auth/me`,    
    activity_types: `${BASE_URL}/activity_types`,
    automation_actions: `${BASE_URL}/automation_actions`,
    automation_conditions: `${BASE_URL}/automation_conditions`,
    automations: `${BASE_URL}/automations`,
    automation_editors: `${BASE_URL}/automation_editors`,
    categories: `${BASE_URL}/categories`,
    chats: `${BASE_URL}/chats`,
    chat_members: `${BASE_URL}/chat_members`,
    chat_messages: `${BASE_URL}/chat_messages`,
    chat_moderators: `${BASE_URL}/chat_moderators`,
    comparison_types: `${BASE_URL}/comparison_types`,
    condition_objects: `${BASE_URL}/condition_objects`,
    condition_value_objects: `${BASE_URL}/condition_value_objects`,
    divisions: `${BASE_URL}/divisions`,
    events: `${BASE_URL}/events`,
    event_members: `${BASE_URL}/event_members`,
    event_repeats: `${BASE_URL}/event_repeats`,
    execution_statuses: `${BASE_URL}/execution_statuses`,
    files: `${BASE_URL}/files`,
    file_types: `${BASE_URL}/file_types`,
    messages: `${BASE_URL}/messages`,
    message_attachments: `${BASE_URL}/message_attachments`,
    message_types: `${BASE_URL}/message_types`,
    notifications: `${BASE_URL}/notifications`,
    organizations: `${BASE_URL}/organizations`,
    organization_employees: `${BASE_URL}/organization_employees`,
    posts: `${BASE_URL}/posts`,
    projects: `${BASE_URL}/projects`,
    project_members: `${BASE_URL}/project_members`,
    roles: `${BASE_URL}/roles`,
    tags: `${BASE_URL}/tags`,
    task_attachments: `${BASE_URL}/task_attachments`,
    task_comments: `${BASE_URL}/task_comments`,
    tasks: `${BASE_URL}/tasks`,
    task_performers: `${BASE_URL}/task_performers`,
    task_priorities: `${BASE_URL}/task_priorities`,
    task_tags: `${BASE_URL}/task_tags`,
    users: `${BASE_URL}/users`,
};