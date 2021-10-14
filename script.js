function getInputValue(){
     
    var fname = document.getElementById("first").value;
    console.log(fname);
    var sname = document.getElementById("second").value;
    console.log(sname);
    var address = document.getElementById("area").value;
    console.log(address);
    var pincode = document.getElementById("pincode").value;
    console.log(pincode);
    var radio = document.getElementsByName("gender");
    for(i = 0; i < radio.length; i++) {
    if(radio[i].checked)
     var rad=radio[i].value;
     console.log(rad);
    }
    var c=[];
    if (document.querySelector('#c1').checked) {
        c.push(document.getElementById('c1').value);  
    }
    if (document.getElementById('c2').checked) {
        c.push(document.getElementById('c2').value);
    }
    if (document.getElementById('c3').checked) {
        c.push(document.getElementById('c3').value);
    }
    if (document.getElementById('c4').checked) {
        c.push(document.getElementById('c4').value);
    }
    if (document.getElementById('c5').checked) {
        c.push(document.getElementById('c5').value);
    }
    var state=document.querySelector("#state").value;
    console.log(state);
    var country=document.querySelector("#country").value;
    console.log(country);

    var mytable=document.querySelector('table');
    mytable.innerHTML=`<thead>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Address</th>
                         <th>Pincode</th>
                         <th>Gender</th>
                         <th>Food</th>
                         <th>State</th>
                        <th>Country</th>

                       </thead>
                       <tbody>
                       <tr>
                           <td>${fname}</td>
                           <td>${sname}</td>
                           <td>${address}</td>
                           <td>${pincode}</td>
                           <td>${rad}</td>
                           <td>${c}</td>
                           <td>${state}</td>
                           <td>${country}</td>
                       </tr>
                       </tbody>`
    var form=document.querySelector("#myform");
    form.reset();
    }
   