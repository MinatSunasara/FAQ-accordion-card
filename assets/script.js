const faqs = document.querySelectorAll(".card");
 faqs.forEach(faq =>{
 	faq.addEventListener("click", ()=> {
 		faq.classList.toggle("active");
 	});
 });