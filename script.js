function myFunction()
 {
  
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
   
    for (i = 0; i < tr.length; i++) 
    {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) 
      {
        txtValue = td.textContent || td.innerText;
        var acento = txtValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

          if (txtValue.toUpperCase().indexOf(filter) > -1) 
          {
            tr[i].style.display = "";
          } 
          else 
          if (acento.toUpperCase().indexOf(filter) > -1)
          {
            tr[i].style.display = "";
          }
          else
          {
            tr[i].style.display = "none";
          }
      }
    }
  }
