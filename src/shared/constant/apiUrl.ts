export const urls = {
  auth: {
    login: (): string => `/login`,
    logout: (): string => `/logout`,
    refresh: (): string => `/refresh`,
  },
  student: {
    student: (): string => `/student`,
    show: (): string => `/student/show`,
  },
};
