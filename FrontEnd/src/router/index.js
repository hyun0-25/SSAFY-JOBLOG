import { createRouter, createWebHistory } from 'vue-router'

//FE 테스트 전용
import Test from '../views/test.vue'

//홈페이지 링크
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/home/LoginView.vue'

//취준토크 페이지
import CoffeeChat from '@/views/coffee_chat/CoffeeChatView.vue'

//채용공고 페이지
import JobPost from '@/views/job_post/JobPostView.vue'
import JobDetail from '@/views/job_post/JobDetailView.vue' 

//커뮤니티 페이지
import QnABoard from '@/views/community/qna_board/QnABoardView.vue'
import ResumeCreate from '@/views/blog/application/resume/ResumeCreateView.vue'

//취준로그 페이지
import Schedule from '@/views/blog/schedule/ScheduleView.vue'
import Journal from '@/views/blog/journal/JournalView.vue'
import JournalCreate from '@/views/blog/journal/JournalCreateView.vue'
import Application from '@/views/blog/application/ApplicationView.vue'
import EssayCreate from '@/views/blog/application/essay/EssayCreateView.vue'

//프로필 세팅 페이지
import ProfileSetting from '@/views/profile/ProfileView.vue'
import EmployeeRegister from '@/views/profile/EmployeeRegisterView.vue'
import NotificationSetting from '@/views/profile/NotificationSettingView.vue'
import DeleteMember from '@/views/profile/DeleteMemberView.vue'
import DeleteCheck from '@/views/profile/DeleteCheckView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/coffee-chat',
      name: 'Coffee',
      component: CoffeeChat
    },
    {
      path: '/employee-register',
      name: 'EmployeeRegister',
      component: EmployeeRegister
    },
    {
      path: '/job-posts',
      name: 'Jobs',
      component: JobPost
    },
    {
      path: '/job-detail',
      name: 'JobDetail',
      component: JobDetail
      // 추후에 각 번호로 입력 받아야함
      // /job-detail/<int: detail-pk>
    },
    {
      path: '/qna-board',
      name: 'QnABoard',
      component: QnABoard
    },

    {
      path: '/blog-schedule',
      name: 'BlogSchedule',
      component: Schedule
    },
    {
      path: '/blog-journal',
      name: 'BlogJournal',
      component: Journal
    },
    {
      path: '/journal-create',
      name: 'JournalCreate',
      component: JournalCreate
    },
// 이력서, 자소서

    {
      path: '/blog-application',
      name: 'BlogApplication',
      component: Application
    },
    {
      path: '/blog-application/essay-create',
      name: 'EssayCreate',
      component: EssayCreate
    },
    {
      path: '/blog-application/resume-create',
      name: 'ResumeCreate',
      component: ResumeCreate
    },
    {
      path: '/profile-setting',
      name: 'ProfileSetting',
      component: ProfileSetting
    },
    {
      path: '/notification-setting',
      name: 'NotificationSetting',
      component: NotificationSetting
    },
    {
      path: '/delete-member',
      name: 'DeleteMember',
      component: DeleteMember
    },
    {
      path: '/delete-check',
      name: 'DeleteCheck',
      component: DeleteCheck
    }
  ]
})

export default router
