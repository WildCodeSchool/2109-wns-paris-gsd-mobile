import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query GetTasks {
    getTasks {
      id
      title
      project {
        name
      }
      taskCreator {
        username
      }
      advancement
      status
      description
      estimated_time
      starting_time
      ending_time
    }
  }
`;

export const GET_PROJECTS = gql`
  query GetProjects {
    getProjects {
      id
      name
      starting_time
      ending_time
      tasks {
        id
        title
        description
        starting_time
        ending_time
        estimated_time
        advancement
        status
      }
      users {
        id
        firstName
        lastName
        username
        email
        role {
          id
          label
        }
      }
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query GetProjectById {
    getProjectById {
      id
      name
      tasks {
        title
        taskCreator {
          userName
        }
        advancement
        status
        description
        estimated_time
        starting_time
        ending_time
      }
    }
  }
`;

export const GET_TASKS_BY_PROJECT_ID = gql`
  query GetTasksByProjectId($data: AllTaskByProjectIdInput!) {
    getTasksByProjectId(data: $data) {
      id
      title
      description
      starting_time
      ending_time
      estimated_time
      advancement
      status
      project {
        name
        id
      }
      taskCreator {
        id
        username
      }
    }
  }
`;

export const GET_TASK_BY_ID = gql`
  query GetTaskById($data: TaskIdInput!) {
    getTaskById(data: $data) {
      id
      title
      description
      starting_time
      ending_time
      advancement
      status
      project {
        id
        name
        starting_time
        ending_time
      }
      taskCreator {
        id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  query LoginUser($data: LoginInput!) {
    loginUser(data: $data) {
      username
      role
      userId
      isConnected
      token
    }
  }
`;
