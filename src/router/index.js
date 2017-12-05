import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import  HomeView from '../components/HomeView/HomeView.vue';
import  ClassView from '../components/ClassView/ClassView.vue';
import  MeView from '../components/ZhangView/ZhangView.vue';
import  ge from '../components/MeView/MeView.vue';
import GuanView from '../components/GuanzhuView/GuanzhuView.vue';
import XiangView from '../components/XiangView/XiangView.vue';
import GowuViwe from '../components/GowuViwe/GowuViwe.vue';
import YesBuy from '../components/YesBuy/YesBuy.vue';
import JinyaoView from '../components/JinyaoView/JinyaoView.vue';
import TojiView from '../components/TojiView/TojiView.vue';
import ShezhiView from '../components/ShezhiView/ShezhiView.vue';
Vue.use(Router);

export default new Router({
routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/home',
      component:HomeView
    },
    {
      path: '/classs',
      component: XiangView
    },
     {
      path: '/me',
      component: MeView
    },
     {
      path: '/ge',
      component: ge
    },
    {
      path: '/guan',
      component: GuanView
    },
    {
      path: '/gouwu',
      component: GowuViwe
    },
    {
      path: '/yes',
      component: YesBuy
    },
    {
      path: '/jin',
      component: JinyaoView
    },
    {
      path: '/tongji',
      component: TojiView
    }, 
    {
      path: '/class',
      component: ClassView
    },
    {
      path: '/shezhi',
      component: ShezhiView
    }
    
    
    
    
    
]
})
