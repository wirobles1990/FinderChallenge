function searchForm(){
}

function searchInput(){
    var x = document.getElementById("campobusqueda");
    if(x.value.length>1){
        document.getElementById("butonbusqueda").disabled=false;
    }else{
        document.getElementById("butonbusqueda").disabled=true;
    }
}

function eliminarBusqueda(enlace){
    document.getElementById(enlace).parentNode.style.display='none';
}

$.ajax({
    url:'books-schema.json',
    dataType:'json',
    type:'get',
    cache: false,
    success:function(data){

        $(data.data).each(function(index, value) {
            //console.log(value.title);
            $('#mylist').append('<option>'+value.title+'</option>');
        });
    }
});

$.ajax({
    url:'books-schema.json',
    dataType:'json',
    type:'get',
    cache: false,
    success:function(data){

        $(data.entities.saved).each(function(index, value) {
            //console.log(value.label);
            $('#busquedas').append("<div class='busqueda'><h4><a href='"+value.url+"'>"+value.label+"</a></h4><a href='javascript:void(0);'>Editar</a><span>|</span><a href='javascript:void(0);' id='"+value.label+"' onclick='eliminarBusqueda(this.id);'>Eliminar</a></div>");
        });
    }
});