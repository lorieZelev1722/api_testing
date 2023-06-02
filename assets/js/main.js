var fetch_data=function(){

 $.ajax({
  type:'GET',
  url:'https://animes5.p.rapidapi.com/',
  headers:{
   'X-RapidAPI-Key': '44e7867464msh0a2da90108acdc9p15f486jsn064feb27266e',
   'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
  },
  success:function(response)
  {
    display_data(response.animes);
  	console.log(response);
  },
  error:function(response)
  {
    console.log(response);
  }
 });


}


var display_data=function(data)
{
	console.log(data);
	let title,genre,i=0;
	let container=$('#anime_section');
	container.empty();
	let content=`<div class="row p-3 mt-3">`;

	for(key in data)
	{
		 i++;
		 content+=`<div class="col-lg-3 mb-3">
		           <div class="card anime-container">
		              <img src="${data[key].main_picture.large}" alt="...">
		              <div class="card-body">
                      <h5 class="card-title title">${data[key].title}</h5>
                       <small class="genre">${data[key].title_english}</small>
                       <div class="text-center mt-3">
                        <button class="btn btn-secondary read_more" data-id="${data[key].id}">VIEW</button>
                        </div></div></div></div>
                        `;

		if(i==4)
		{
         content+=`</div><div class="row p-3 mt-3">`;
         i=0;
		}
	}

container.append(content);

}


var responsive=function()
{
    var screen_width=$(window).width();
    
     if(screen_width<850)
     {
        $('.navbar-toggler').show();
        $('#dekstop-search').hide();
        $('#navbarMobile').hide();
        $('.navbar-brand').find('span').css('font-size','1rem');
        $('.navbar-brand').find('span').show();

        if(screen_width<=296)
        {
          $('.navbar-brand').find('span').hide();
        }
     }
     else
     {
        $('.navbar-toggler').hide();
        $('#dekstop-search').show();
        $('.navbar-brand').find('span').css('font-size','1.5rem');
        $('.navbar-brand').find('span').show();
     }
}


$(document).on('click','.navbar-toggler',function(event){
  event.preventDefault();

  let open=$(this).attr('data-id');
  
  if(open==="false"){
  $('#navbarMobile').slideDown();
  $(this).attr('data-id',"true");
    }
    else{
    $('#navbarMobile').slideUp(); 
  $(this).attr('data-id',"false");
    }

    
});


$(document).on('click','.read_more',function(event){
	event.preventDefault();
	let id=$(this).attr('data-id');
	alert(id);
})