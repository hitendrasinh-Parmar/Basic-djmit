faulties = {
       emp:[
       {
         name: 'bhupo',
         expirence : '21 years',
         disp : 'no expirence'
      }
      ,
      {
        name: 'bhupo',
        expirence : '21 years',
        disp : 'no expirence'
     }
     ,
     {
        name: 'bhupo',
        expirence : '21 years',
        disp : 'no expirence'
     }
     
       ]
}

const Faculties = document.querySelector('.faculties');

document.onload(

    faculties.emp.forEach( ( element ) => {

        Faculties.innerHTML=`
        div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4 w-25 h-25 mx-auto ">
          <img src="images/HirenTalati.jpg" class="card-img " alt="HirenTalati.jpg">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${ faulties.emp[element].name}</h5>
            <p class="card-text">
            ${ faulties.emp[element].experience} <br>
            
            </p>
            <p class="card-text"><small class="text-muted">
            ${ faulties.emp[element].disp}        </small></p>
          </div>
        </div>
      </div>
    </div>
    
        `
        
    });
)

