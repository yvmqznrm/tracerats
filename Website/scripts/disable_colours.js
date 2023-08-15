var colours = ["sStorm", "dStorm", "sMayhem", "dMayhem", "sSoph", "dSoph", "sMichael", "dMichael", "sDev", "dDev", "sNova", "dNova", "sPolice", "dPolice", "sPoliticians", "dPoliticians", "sNazis", "dNazis", "sSquatters", "dSquatters", "sActivists", "dActivists", "sBand", "dBand", "sMedics", "dMedics"];
var r = document.querySelector(':root');
var rs = getComputedStyle(r);

function dcEnable() {
  for(i = 0; i < colours.length; i++) {
    if(colours[i].substring(0,1) == "s") {
      r.style.setProperty(("--" + colours[i]), rs.getPropertyValue('--Light'));
    } else {
      r.style.setProperty(("--" + colours[i]), rs.getPropertyValue('--Text'));
    }
  }
  document.getElementById("colourToggleGay").style.display = "none";
  document.getElementById("colourToggleGray").style.display = "block";
}

function dcDisable() {
  for(i = 0; i < colours.length; i++) {
    r.style.setProperty("--" + colours[i], rs.getPropertyValue("--PERM" + colours[i]));
  }
  document.getElementById("colourToggleGray").style.display = "none";
  document.getElementById("colourToggleGay").style.display = "block";
}

function dcToggle() {
  if (dcOn == false) {
    dcEnable();
    document.cookie = "dcOn=ON; path=/;";
    dcOn = true;
  } else {
    dcDisable();
    document.cookie = "dcOn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dcOn = false;
  }
}


if (document.cookie == "") {
  dcDisable();
  var dcOn = false;
  document.getElementById("colourToggleGray").style.display = "none";
  document.getElementById("colourToggleGay").style.display = "block";
} else {
  dcEnable();
  var dcOn = true;
  document.getElementById("colourToggleGay").style.display = "none";
  document.getElementById("colourToggleGray").style.display = "block";
}
