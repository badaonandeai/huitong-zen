// 返回顶部
const backTop = document.querySelector('.back-top');
window.addEventListener('scroll',function(){
    if(window.scrollY > 300){
        backTop.style.display = 'block';
    }else{
        backTop.style.display = 'none';
    }
})
backTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

