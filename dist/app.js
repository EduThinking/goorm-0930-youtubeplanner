const videos=[
{id:'mMgCEJEAm54',title:'올인원 클로드코워크 마스터 강의',channel:'신영선의 AI탐구',topic:'Claude · 업무 자동화'},
{id:'ZMpiogq79Dw',title:'챗GPT 200% 활용하는 방법',channel:'신영선의 AI탐구',topic:'ChatGPT · 비즈니스'},
{id:'RrU-AfgWb5U',title:"10분 만에 챗GPT '제대로' 쓰는 법",channel:'노마드윤',topic:'프롬프트 · 입문'},
{id:'Fp8uIj0X_MA',title:'AI 왕기초 챗GPT 10분 기본 완성',channel:'에이커, 돈이되는 AI와 이커머스',topic:'ChatGPT · 왕초보'},
{id:'R2IxUDVM48g',title:'ChatGPT를 구글 시트에서 활용하기',channel:'일잘러 장피엠',topic:'Google Sheets · 자동화'},
{id:'6IwATR9KOAo',title:'최신 챗GPT를 내 업무에 적용하는 방법',channel:'일잘러 장피엠',topic:'업무 활용 · 생산성'},
{id:'DAGAPV1qef8',title:'챗GPT, 제대로 사용하려면 이 영상만 보세요!',channel:'김덕진의 뉴스덕',topic:'사용법 · 활용 전략'},
{id:'c9K6dNrsC4o',title:'대부분은 시도도 안 해본 챗GPT 숨겨진 활용법',channel:'홍아린 AI',topic:'AI 실전 활용'},
{id:'MxGG5dzj6So',title:'챗GPT 왕초보 완전정복 1편',channel:'디지털 해결사',topic:'입문 · 튜토리얼'},
{id:'GVd-s4yhNHI',title:'챗GPT로 데이터 분석하는 방법',channel:'AI 사용 설명서',topic:'데이터 분석'}
];
const plans=[
{type:'교육형',score:94,title:'직장인이 꼭 알아야 할 생성형 AI 업무자동화 7가지',target:'AI를 업무에 바로 적용하고 싶은 직장인',reason:'업무자동화·Claude 주제의 높은 조회 속도와 “7가지” 제목 패턴을 결합했습니다.',outline:['퇴근을 2시간 앞당기는 AI 활용 핵심','ChatGPT와 Claude의 결정적 차이','이메일 3초 만에 작성하기','50페이지 PDF 보고서 요약','Excel 데이터 오류 분석 자동화','슬라이드 발표자료 뼈대 만들기','무료 프롬프트 템플릿과 Q&A']},
{type:'비교형',score:91,title:'30분 만에 끝내는 마케터 전용 AI 실무 툴 5종 비교',target:'콘텐츠 기획과 카피라이팅이 지친 실무 마케터',reason:'비교형 콘텐츠와 실무 사례 수요가 동시에 높은 시장 갭을 겨냥합니다.'},
{type:'튜토리얼',score:91,title:'비전공자도 당일 시작하는 생성형 AI 에이전트 만들기',target:'코딩 지식 없이 자동화를 시작하고 싶은 입문자',reason:'AI 에이전트 키워드의 급상승과 입문 튜토리얼의 체류 성과를 반영했습니다.'},
{type:'리뷰형',score:89,title:'월 20달러 아깝지 않은 ChatGPT vs Claude 실무 끝장 비교',target:'유료 플랜 결제를 망설이는 대학생 및 프리랜서',reason:'도구 가격 대비 효과에 대한 미충족 니즈를 직접 해결합니다.'},
{type:'Shorts',score:87,title:'50초 만에 이메일 회신 끝내는 Claude 프롬프트',target:'출퇴근길 빠른 팁을 찾는 숏폼 모바일 시청자',reason:'짧은 즉시 적용 팁과 템플릿 복사 수요를 Shorts 형식으로 전환했습니다.'}
];
let currentKeyword='생성형 AI 교육';let currentType='전체';
function show(section){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active-view'));const target=document.getElementById(section);if(target){target.classList.add('active-view');window.scrollTo({top:0,behavior:'smooth'})}document.querySelectorAll('[data-section]').forEach(b=>b.classList.toggle('active',b.dataset.section===section));}
document.querySelectorAll('[data-section]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.section)));
document.querySelectorAll('.segment').forEach(group=>group.addEventListener('click',e=>{if(e.target.tagName==='BUTTON'){group.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));e.target.classList.add('selected')}}));
document.getElementById('keywordChips').addEventListener('click',e=>{const b=e.target.closest('button');if(b)document.getElementById('keyword').value=b.dataset.keyword});
document.getElementById('analyzeForm').addEventListener('submit',e=>{e.preventDefault();currentKeyword=document.getElementById('keyword').value.trim()||'생성형 AI 교육';document.querySelectorAll('.live-keyword').forEach(x=>x.textContent=currentKeyword);document.getElementById('loadingKeyword').textContent=currentKeyword;show('loading');const messages=['관련 영상 데이터를 정리하는 중…','조회 속도와 참여율을 계산하는 중…','AI가 성공 패턴과 콘텐츠 갭을 찾는 중…'];let i=0;const timer=setInterval(()=>{i++;if(i<messages.length)document.getElementById('loadingText').textContent=messages[i];else{clearInterval(timer);show('market');toast('50개 영상의 샘플 분석이 완료되었습니다.')}},800)});
document.getElementById('videoRows').innerHTML=videos.map((v,i)=>{const url=`https://www.youtube.com/watch?v=${v.id}`;return `<tr><td>${String(i+1).padStart(2,'0')}</td><td><div class="video-cell"><a class="thumb-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${v.title} YouTube에서 보기"><img class="video-thumb" src="https://i.ytimg.com/vi/${v.id}/mqdefault.jpg" alt="${v.title} 썸네일" loading="lazy"></a><a class="video-title" href="${url}" target="_blank" rel="noopener noreferrer">${v.title}<small>YouTube 공개 영상</small></a></div></td><td>${v.channel}</td><td><span class="topic-badge">${v.topic}</span></td><td><a class="watch-link" href="${url}" target="_blank" rel="noopener noreferrer"><span>▶</span> 영상 보기</a></td></tr>`}).join('');
function renderPlans(){const available=currentType==='전체'?plans:plans.filter(p=>p.type===currentType);const first=available[0]||plans[0];document.getElementById('featuredPlan').innerHTML=`<div class="plan-head"><div><small>[AI] ${first.type} · RECOMMENDED</small><h2>${first.title}</h2></div><span class="potential">예상 점수 ${first.score}/100</span></div><div class="evidence"><b>데이터 분석 근거</b><br>${first.reason}</div><p><b>타깃:</b> ${first.target}</p><div class="outline">${(first.outline||['문제 상황과 시청자 공감','핵심 도구와 선택 기준','실제 업무 적용 데모','주의할 점과 실패 사례','즉시 실행 체크리스트']).map(x=>`<div>${x}</div>`).join('')}</div>`;document.getElementById('planGrid').innerHTML=available.slice(1).map(p=>`<article class="plan-card"><div class="meta"><span>${p.type}</span><span>${p.score}/100</span></div><h3>${p.title}</h3><p><b>타깃</b> · ${p.target}</p><p>${p.reason}</p></article>`).join('')||plans.filter(p=>p!==first).slice(0,2).map(p=>`<article class="plan-card"><div class="meta"><span>${p.type}</span><span>${p.score}/100</span></div><h3>${p.title}</h3><p>${p.reason}</p></article>`).join('')}
document.getElementById('typeFilter').addEventListener('click',e=>{if(e.target.tagName==='BUTTON'){document.querySelectorAll('#typeFilter button').forEach(b=>b.classList.remove('selected'));e.target.classList.add('selected');currentType=e.target.textContent;renderPlans()}});
document.getElementById('regenerate').addEventListener('click',()=>{const btn=document.getElementById('regenerate');btn.textContent='✦ 기획안 생성 중…';btn.disabled=true;setTimeout(()=>{plans.forEach(p=>p.score=Math.max(84,Math.min(98,p.score+(Math.random()>.5?1:-1))));renderPlans();btn.textContent='⚡ 이 조건으로 다시 기획하기';btn.disabled=false;toast(`${currentType} 조건으로 기획안을 새로 구성했습니다.`)},900)});
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}
renderPlans();
