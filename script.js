function copy_address()
{
    var checkbox_address = document.querySelector('input[Id="check-adress"]');  
    if (checkbox_address.checked)
  {
    document.getElementById("actual-address").value = document.getElementById("legal-address").value; 
    document.getElementById("actual-address").readOnly=(true);
    document.getElementById("actual-address").style.background=("#F2F3F7")
    document.getElementById("actual-address").style.borderColor=("#F2F3F7")
}
  else
  {
    document.getElementById("actual-address").value='';
    document.getElementById("actual-address").readOnly=(false);
    document.getElementById("actual-address").style.background=("")
    document.getElementById("actual-address").style.borderColor=("")
  }
}
function show_license()
{
    var checkbox_license = document.querySelector('input[Id="check-license"]');
    if(checkbox_license.checked)
    {
        document.querySelector('div[class="section__license_display"]').style.display=("block")
    }
    else{
        document.querySelector('div[class="section__license_display"]').style.display=("none")
    }
}
function show_unlim_license()
{
    var checkbox_unlim_license = document.querySelector('input[Id="check-unlim-license"');
    if(checkbox_unlim_license.checked)
  { 
      document.querySelector('div[class="date-license"]').style.display="none";
  }
  else{
      document.querySelector('div[class="date-license"]').style.display="block";
  }
}
function citizenshipRF_yes()
{
    var checkbox_citizenship = document.querySelector('input[Id="radioYes"]');
    if(checkbox_citizenship.checked)
    {
      document.querySelector('section[class="date-manager__section-country"]').style.display="none";
      document.querySelector('section[class="date-manager__section-imigration-card"]').style.display="none";
      document.querySelector('section[class="date-manager__section-visa"]').style.display="none";
    }
}
function citizenshipRF_no()
{
    var checkbox_citizenship_no = document.querySelector('input[Id="radioNo"]');
    if(checkbox_citizenship_no.checked)
    {
      document.querySelector('section[class="date-manager__section-country"]').style.display="inline";
      document.querySelector('section[class="date-manager__section-visa"]').style.display="inline";
      document.querySelector('section[class="date-manager__section-imigration-card"]').style.display="inline";
    }
}