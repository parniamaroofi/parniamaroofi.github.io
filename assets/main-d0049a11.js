import{_ as h,r as S,d as l,o,e as n,f as e,c as C,i as p,j as k,t as s,h as i,n as u,a as f,p as z,F as y,g as v}from"./index-68d407fa.js";import{u as b}from"./utilities-f1d650c0.js";import{_ as V}from"./parnia-5096dd5a.js";const D={name:"ResumeNewPreface",setup(){const t=S(!1),d=S(!1);return{showElement:t,downloading:d}},mounted(){this.showElement=!0},watch:{"$vuetify.locale.rtl.fa":function(){this.showElement=!1,setTimeout(()=>{this.showElement=!0},50)}},methods:{},computed:{computedBackground(){return this.$vuetify.theme.global.name=="light"?"/images/light-bg.jpg":"/images/dark-bg.jpg"}}},P={class:"flex justify-end absolute top-6 left-0 w-full px-5"},T={class:"flex gap-x-3 text-white text-[11.5px]"},B=e("div",{class:"snippet mt-2","data-title":".dot-elastic"},[e("div",{class:"stage"},[e("div",{class:"dot-elastic"})])],-1),M={class:"flex gap-x-2"},R={class:"text-[11.5px]"},A={class:"absolute top-[42%] -translate-y-1/2"},L={key:1,class:"text-[3vw] max-sm:text-[8.5vw] animate__animated animate__fadeInDown animate__slow"},U={key:2,class:"mt-24 max-md:text-[14px] uppercase underline underline-offset-[12px] animate__animated animate__fadeInUp animate__delay-2s"},F={class:"absolute bottom-5 left-0 w-full flex justify-end px-5 z-10"},q={key:0,class:"flex gap-x-5 animate__animated animate__fadeInUp animate__slow animate__delay-2s"},H={href:"mailto:parniamaroofi@gmail.com"},Y={class:"text-[11.5px]"},G={target:"blank",href:"https://www.linkedin.com/in/parniamaroofi"},J={class:"text-[11.5px]"},K=e("span",{class:"mouse sm:flex hidden"},[e("span",{class:"mouse-wheel"})],-1),O=[K];function Q(t,d,$,c,g,_){const a=l("v-icon"),r=l("v-btn"),m=l("v-tooltip");return o(),n("div",{style:z(`background-image: url('${_.computedBackground}')`),class:"w-full h-[calc(100dvh-50px)] bg-cover text-white relative lg:px-[140px] md:px-[32px] px-[16px] *:transition-all duration-300 mt-[50px]"},[e("div",P,[c.showElement?(o(),C(r,{key:0,variant:"outlined",class:u(["rounded-[6px] animate__animated animate__slow animate__delay-2s md:w-[170px] w-[154px]",t.$i18n.locale!="fa"?"animate__fadeInRight":"animate__fadeInLeft"]),loading:c.downloading},{loader:p(()=>[e("span",T,[k(s(t.$t("term.downloading"))+" ",1),B])]),default:p(()=>[e("div",M,[e("span",R,s(t.$t("term.resumeDownload")),1),i(a,{class:"stroke-white"},{default:p(()=>[k("svg:download")]),_:1})])]),_:1},8,["class","loading"])):f("",!0)]),e("div",A,[c.showElement?(o(),n("p",{key:0,class:u(["uppercase sm:text-[13.5px] text-[11.5px] animate__animated animate__fadeInDown animate__slow animate__delay-1s",t.$i18n.locale!="fa"?"tracking-[3px]":"tracking-wider"])},s(t.$t("term.name"))+" - "+s(t.$t("term.programmer")),3)):f("",!0),c.showElement?(o(),n("p",L,s(t.$t("term.jobTitle")),1)):f("",!0),c.showElement?(o(),n("p",U,s(t.$t("term.websiteTitle")),1)):f("",!0)]),e("div",F,[c.showElement?(o(),n("div",q,[e("a",H,[i(a,{class:"scale-[1.4] hover:-translate-y-1 duration-300 cursor-pointer"},{default:p(()=>[k(" svg:message ")]),_:1}),i(m,{activator:"parent",location:"top"},{default:p(()=>[e("span",Y,s(t.$t("term.sendEmail")),1)]),_:1})]),e("a",G,[i(a,{class:"scale-[1.4] hover:-translate-y-1 duration-300 cursor-pointer"},{default:p(()=>[k("svg:linkedin")]),_:1}),i(m,{activator:"parent",location:"top"},{default:p(()=>[e("span",J,s(t.$t("term.visitLinkedin")),1)]),_:1})])])):f("",!0)]),e("div",{onClick:d[0]||(d[0]=E=>t.emitter.emit("goToSection","profile")),class:"cursor-pointer bg-red"},O)],4)}const W=h(D,[["render",Q]]),X={name:"ResumeNewProfile",mixins:[b],data(){return{}},mounted(){this.emitter.on("goToSection",t=>{t=="skills"&&document.getElementById(t).scrollIntoView({block:"start"})})},methods:{}},Z={class:"shadow-md rounded-xl overflow-hidden"},ee={class:"w-full bg-gray-200 dark:bg-zinc-800 p-6 text-center"},te=e("div",{class:"mx-auto w-fit"},[e("img",{src:V,class:"size-[184px] rounded-full"})],-1),se={class:"name mt-4 md:text-[18px]"},oe={class:"text-gray-500 dark:text-gray-400 md:text-[13.6px] text-[13px] font-semibold dark:font-normal tracking-wide mt-0.5"},ne={class:"p-6 bg-white dark:bg-zinc-900"},ae={class:"flex flex-col gap-y-5 md:text-[13.2px] text-[12.5px] font-semibold dark:font-normal"},ie={class:"flex justify-between"},le={class:"dark:text-white"},re={class:"text-gray-600 dark:text-gray-400"},de={class:"flex justify-between"},ce={class:"dark:text-white"},me={class:"flex justify-between"},pe={class:"mt-2 dark:text-white text-[12.5px] font-semibold dark:font-normal"},_e={key:0,class:"text-[11px] font-semibold dark:font-normal text-gray-500 dark:text-gray-400"},xe={class:"dark:text-white",id:"skills"},ue={class:"mb-6 text-[20px] font-semibold"},fe={class:"flex items-center gap-x-1"},he={class:"md:text-[14px] text-[13px]"},$e={key:0,class:"px-2"},ge={class:"md:text-[12px] text-[11px]"};function ye(t,d,$,c,g,_){const a=l("v-divider"),r=l("v-progress-circular"),m=l("v-icon"),E=l("v-chip");return o(),n("div",Z,[e("div",ee,[te,e("p",se,s(t.$t("term.name")),1),e("p",oe,s(t.$t("term.jobTitle")),1)]),e("section",ne,[e("div",ae,[e("div",ie,[e("span",le,s(t.$t("term.residence"))+": ",1),e("span",re,s(t.$t("term.residenceCountry"))+", "+s(t.$t("term.residenceCity")),1)]),e("div",de,[e("span",ce,s(t.$t("term.age"))+": ",1),e("span",{class:u(["text-gray-600 dark:text-gray-400",t.$i18n.locale=="fa"?"estedad-font":""])},s(Number(t.currentYear)-1997),3)])]),i(a,{class:"opacity-100 border-gray-300 dark:opacity-15 my-4"}),e("div",me,[(o(!0),n(y,null,v(t.languages,(x,w)=>(o(),n("div",{key:w,class:"text-center"},[i(r,{rotate:360,width:5,size:58,modelValue:x.progress,"onUpdate:modelValue":N=>x.progress=N,color:"secondary"},{default:p(()=>[e("strong",{class:u(["text-[12px] font-semibold",t.$i18n.locale=="fa"?"estedad-font tracking-[-1.5px]":""])},s(x.progress)+"%",3)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e("p",pe,s(x[`${t.$i18n.locale}Name`]),1),x.native?(o(),n("p",_e," ("+s(t.$t("term.native"))+") ",1)):f("",!0)]))),128))]),i(a,{class:"opacity-100 border-gray-300 dark:opacity-15 my-4"}),e("div",xe,[e("h2",ue,s(t.$t("term.skills")),1),e("div",null,[(o(!0),n(y,null,v(t.skills,(x,w)=>(o(),n("div",{key:w,class:"mb-3"},[e("div",fe,[i(m,{color:"secondary",class:"text-[18px]"},{default:p(()=>[k("mdi-circle-medium")]),_:1}),e("span",he,s(x.name),1),x.familiar?(o(),n("span",$e,[i(E,{color:"secondary",style:{height:"20px"}},{default:p(()=>[e("span",ge,s(t.$t("term.familiar")),1)]),_:1})])):f("",!0)])]))),128))])])])])}const ve=h(X,[["render",ye]]),be={name:"ResumeNewAboutMe",mixins:[b],data(){return{}},mounted(){},methods:{}},we={class:"mb-4 sm:text-[20px] text-[18px] font-semibold text-secondary title-line"},ke={class:"md:text-[14px] text-[12.6px] text-gray-700 dark:text-gray-300 leading-6 md:px-6"};function Ee(t,d,$,c,g,_){return o(),n("div",null,[e("h2",we,s(t.$t("term.aboutMe")),1),e("p",ke,s(t.aboutMe[t.$i18n.locale]),1)])}const Ne=h(be,[["render",Ee]]),Se={name:"ResumeNewEducation",mixins:[b],data(){return{}},mounted(){},methods:{}},je={class:"mb-4 sm:text-[20px] text-[18px] font-semibold text-secondary title-line"},Ie={class:"md:px-6"},Ce={class:"text-gray-700 dark:text-gray-300 font-semibold md:text-[17px] text-[15px]"},ze={class:"my-2 text-gray-500 font-semibold md:text-[13px] text-[12px] flex flex-col gap-y-0.5"};function Ve(t,d,$,c,g,_){return o(),n("div",null,[e("h2",je,s(t.$t("term.education")),1),e("ul",Ie,[(o(!0),n(y,null,v(t.educations,(a,r)=>(o(),n("li",{key:r},[e("h3",Ce,s(a[`${t.$i18n.locale}Name`]),1),e("div",ze,[e("p",{class:u(t.$i18n.locale=="fa"?"estedad-font":"")},s(a[`${t.$i18n.locale}Duration`]),3),e("p",null,s(a[`${t.$i18n.locale}Degree`]),1),e("p",null,s(a[`${t.$i18n.locale}Location`]),1)])]))),128))])])}const De=h(Se,[["render",Ve]]),Pe={name:"ResumeNewSoftSkills",mixins:[b],data(){return{}},mounted(){},methods:{}},Te={class:"mb-5 sm:text-[20px] text-[18px] font-semibold text-secondary title-line"},Be={class:"grid grid-cols-3 justify-between items-center sm:px-6"},Me={class:"text-center"},Re={class:"md:text-[13px] text-[11.5px] text-gray-500 dark:text-white mb-5 font-semibold dark:font-normal max-sm:w-20"};function Ae(t,d,$,c,g,_){const a=l("lord-icon");return o(),n("div",null,[e("h2",Te,s(t.$t("term.softSkills")),1),e("div",Be,[(o(!0),n(y,null,v(t.softSkills,(r,m)=>(o(),n("div",{key:m,class:u(["flex flex-col justify-center",m==0?"items-start":m==1?"items-center":"items-end"])},[e("div",Me,[i(a,{src:r.image,trigger:"morph",stroke:"64",class:"sm:w-[90px] sm:h-[90px] w-[70px] h-[70px]"},null,8,["src"]),e("h3",Re,s(r[`${t.$i18n.locale}Name`]),1)])],2))),128))])])}const Le=h(Pe,[["render",Ae]]),Ue={name:"ResumeNewExperiences",mixins:[b],data(){return{}},mounted(){},methods:{}},Fe={class:"mb-5 sm:text-[20px] text-[18px] font-semibold text-secondary title-line"},qe={class:"md:px-6"},He={class:"flex sm:gap-x-4 gap-x-2.5"},Ye={class:"sm:min-w-[60px] min-w-[55px]"},Ge=["src"],Je={class:"text-gray-500 font-semibold md:text-[13px] text-[12px] flex flex-col gap-y-[1.5px]"},Ke={class:"text-gray-700 dark:text-gray-300 font-semibold md:text-[16px] text-[15px]"},Oe={class:"dark:text-white font-semibold"},Qe={class:"text-gray-500 max-md:text-[12px]"},We={key:0,class:"h-12 w-[1px] border-r-[1px] border-dashed border-gray-500 mx-[30px]"};function Xe(t,d,$,c,g,_){return o(),n("div",null,[e("h2",Fe,s(t.$t("term.experiences")),1),e("ul",qe,[(o(!0),n(y,null,v(t.experiences,(a,r)=>(o(),n("li",{class:u(r!=t.experiences.length-1?"pb-4":""),key:r},[e("div",He,[e("div",Ye,[e("img",{src:a.logo,class:"rounded-lg mt-1 mb-4 aspect-square sm:size-[60px] size-[55px]"},null,8,Ge)]),e("div",Je,[e("h3",Ke,s(a[`${t.$i18n.locale}Name`]),1),e("p",{class:u(t.$i18n.locale=="fa"?"estedad-font ":"")},s(a[`${t.$i18n.locale}Duration`]),3),e("p",null,s(a[`${t.$i18n.locale}Location`]),1)])]),e("div",{class:u([t.$i18n.locale!="fa"?"border-l-[3px] pl-2":"border-r-[3px] pr-2","flex flex-col gap-y-1 border-secondary dark:border-third mb-4 text-[13.5px] leading-[22px]"])},[e("span",Oe,s(t.$t("term.technologies"))+": ",1),e("span",Qe,s(a.technologies.join(", ")),1)],2),r!=t.experiences.length-1?(o(),n("div",We)):f("",!0)],2))),128))])])}const Ze=h(Ue,[["render",Xe]]),et={name:"ResumeNewHonors",mixins:[b],data(){return{}},mounted(){},methods:{openImage(){let t=document.createElement("a");t.setAttribute("href","/images/certificate.png"),t.setAttribute("target","blank"),t.click()}}},tt={class:"mb-5 sm:text-[20px] text-[18px] font-semibold text-secondary title-line"},st={class:"md:px-6"},ot={class:"flex gap-x-4 mb-4"},nt={class:"min-w-[65px]"},at=["src"],it={class:"flex flex-col justify-between text-gray-500 font-semibold text-[13px]"},lt={class:"text-gray-700 dark:text-gray-300 font-semibold md:text-[17px] text-[15px] line-clamp-1"},rt={class:"mb-1 max-sm:text-[10.5px]"};function dt(t,d,$,c,g,_){return o(),n("div",null,[e("h2",tt,s(t.$t("term.certificates")),1),e("ul",st,[(o(!0),n(y,null,v(t.honors,(a,r)=>(o(),n("li",{key:r},[e("div",ot,[e("div",nt,[e("img",{src:a.image,width:"65",height:"90",class:"rounded-lg cursor-pointer w-[65px] aspect-9/12",onClick:d[0]||(d[0]=(...m)=>_.openImage&&_.openImage(...m))},null,8,at)]),e("div",it,[e("h3",lt,s(a[`${t.$i18n.locale}Title`]),1),e("div",null,[e("p",rt,s(a[`${t.$i18n.locale}Description`]),1),e("p",{class:u(["max-md:text-[12.5px]",t.$i18n.locale=="fa"?"estedad-font":""])},s(a[`${t.$i18n.locale}Date`]),3)])])])]))),128))])])}const ct=h(et,[["render",dt]]),mt={name:"MainPage",components:{Preface:W,Profile:ve,AboutMe:Ne,Education:De,SoftSkills:Le,Experiences:Ze,Certificates:ct},data(){return{}},mounted(){this.emitter.on("goToSection",t=>{t!="skills"&&document.getElementById(t).scrollIntoView({block:"start"})})},methods:{}},pt={id:"main"},_t={class:"md:p-6 p-4"},xt={class:"p-6 bg-white dark:bg-zinc-900 min-h-full shadow-md rounded-xl flex flex-col justify-between gap-y-10"};function ut(t,d,$,c,g,_){const a=l("Preface"),r=l("Profile"),m=l("v-col"),E=l("AboutMe"),x=l("Education"),w=l("Experiences"),N=l("Certificates"),j=l("SoftSkills"),I=l("v-row");return o(),n("div",pt,[i(a),e("div",_t,[i(I,null,{default:p(()=>[i(m,{lg:"3",md:"3",sm:"12",cols:"12"},{default:p(()=>[i(r,{id:"profile"})]),_:1}),i(m,null,{default:p(()=>[e("div",xt,[i(E,{id:"aboutMe"}),i(x,{id:"education"}),i(w,{id:"experiences"}),i(N,{id:"certificates"}),i(j,{id:"softSkills"})])]),_:1})]),_:1})])])}const gt=h(mt,[["render",ut]]);export{gt as default};
