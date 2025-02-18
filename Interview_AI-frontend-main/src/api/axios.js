

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});


/////////////////////
export const endPoints = {
  auth: {
    login: "/api/v1/auth/login",
    register: "/api/v1/auth/register",
    loginWithGoogle: "/api/v1/auth/login-with-google",
    resetPassword: "/api/v1/auth/resetpassword",
    verify: "/api/v1/auth/verify",
    sendOtp: "/api/v1/auth/sendotp",
    sendCode: "/api/v1/auth/send-code",
    verifyCode: "/api/v1/auth/verify-code",
    logout: "/api/v1/auth/logout",
    getProfile: "/api/v1/auth/profile",
    updateProfile: "/api/v1/auth/profile/update",
    deleteProfilePhoto: "/api/v1/auth/profile/photo",
    getAllUsers: "/api/v1/auth/getalluser",
  },
  interview: {
    commonInterview: "/api/v2/interview",
    mockInterview: "/api/v2/interview/mock-interview",
    userAnswer: "/api/v2/interview/user-answer",
    createdBy: "/api/v2/interview/created-by",
    schedule: "/api/v2/interview/schedule",
    viewSchedule: "/api/v2/interview/viewschedule",
    allViewSchedule: "/api/v2/interview/all/viewschedule",
  },
  exam: {
    create: "/api/v2/exam/exams",
    complete: "/api/v2/exam/exam/complete",
    getByUser: "/api/v2/exam/exam",
    getById: "/api/v2/exam/exams", // Requires :examId parameter
    getLatest: "/api/v2/exam/latest-exams"
  },
  enrollment: {
    enroll: "/api/v2/enroll/enroll",
    getUserCourses: "/api/v2/enroll/getenroll",
    completeExam: "/api/v2/enroll/complete-exam" // Requires :id parameter
  },
  courses: {
    create: "/api/courses/create",
    getAll: "/api/courses/get",
    getByRole: "/api/courses/role", // Requires :roleId parameter
    update: "/api/courses", // Requires :id parameter
    delete: "/api/courses" // Requires :id parameter
  },
  courseInfo: {
    create: "/api/course-info/create",
    getAll: "/api/course-info/get",
    getSpecific: "/api/course-info", // Requires :courseId/:roleId parameters
    update: "/api/course-info", // Requires :id parameter
    delete: "/api/course-info" // Requires :id parameter
  },
  skills: {
    create: "/api/v2/skill/skills",
    getAll: "/api/v2/skill/skills",
    update: "/api/v2/skill/skills", // Requires :id parameter
    delete: "/api/v2/skill/skills" // Requires :id parameter
  },
  roles: {
    create: "/api/roles/create",
    getAll: "/api/roles/get",
    getById: "/api/roles", // Requires :id parameter
    update: "/api/roles", // Requires :id parameter
    delete: "/api/roles" // Requires :id parameter
  },
  recruiters: {
    create: "/api/recruiters/create",
    getAll: "/api/recruiters/get",
    getById: "/api/recruiters", // Requires :id parameter
    update: "/api/recruiters", // Requires :id parameter
    delete: "/api/recruiters" // Requires :id parameter
  },
  candidates: {
    create: "/api/v2/candidate/addcandidateinfo",
    getAll: "/api/v2/candidate/viewallinfo",
    getById: "/api/v2/candidate/viewinfo", // Requires :id parameter
    update: "/api/v2/candidate", // Requires :id parameter
    delete: "/api/v2/candidate" // Requires :id parameter
  }
};
