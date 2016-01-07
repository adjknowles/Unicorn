$(function(){
  $("#intro").on("click", closeIntro);
  $("form").on("submit", submitForm);
  $(".login-link, .register-link, .about-link, .addstartup-link, .addworkspace-link").on("click", showPage)
  $(".map-link").on("click", mapPage);
  $(".logout-link").on("click", logout);
  hideErrors();
  checkLoginState();
});

function closeIntro(){
  event.preventDefault(); 
  return mapPage();
};

function mapPage(){
  event.preventDefault();
  $("section").hide();
  return $("#map").show();
}

function showPage(){
  event.preventDefault();
  var linkClass = $(this).attr("class").split("-")[0];
  $("section").hide();
  return $("#" + linkClass).show();
}

function logout(){
  event.preventDefault();
  removeToken();
  return loggedOutState();
}

function submitForm(){
  event.preventDefault();
  var method = $(this).attr("method");
  var url    = "/api" + $(this).attr("action");
  var data   = $(this).serialize();
  return ajaxRequest(method, url, data, authenticationSuccessful);
}

function ajaxRequest(method, url, data, callback) {
  return $.ajax({
    method: method,
    url: url,
    data: data,
    beforeSend: setRequestHeader,
  }).done(function(data){
    if (callback) return callback(data);
  }).fail(function(data) {
    displayErrors(data.responseJSON.message);
  });
}

function setRequestHeader(xhr, settings) {
  var token = getToken();
  if (token) return xhr.setRequestHeader('Authorization','Bearer ' + token);
}

function setToken(token) {
  return localStorage.setItem("token", token);
}

function getToken() {
  return localStorage.getItem("token");
}

function removeToken() {
  return localStorage.clear();
}

function authenticationSuccessful(data) {
  if (data.token) setToken(data.token);
  return checkLoginState();
}

function checkLoginState(){
  if (getToken()) {
    return loggedInState();
  } else {
    return loggedOutState();
  }
}

function loggedInState(){
  $("section, .logged-out").hide();
  mapApp.addMarkers('startups');
  mapApp.addMarkers('workspaces');
  $("#map, .logged-in").show();
}

function loggedOutState(){
  $("section").hide();
  $(".logged-in").hide();
  $("#map, .logged-out").show();
  return hideResults();
}

function getStartups(){
  return ajaxRequest("get", "/api/startups", null, displayResults);
}

function getWorkspaces(){
  return ajaxRequest("get", "/api/workspaces", null, displayResults);
}

function displayResults(data){
  hideErrors();
  hideResults();
  displayStartups();
  displayWorkspaces();
}

function displayStartups(data){
  return $('results').prepend('<p>Startups here!</p>');
}

function displayWorkspaces(data){
  return $('results').prepend('<p>Workspaces here!</p>');
}

function hideResults(){
  return $("#results").empty();
}

function displayErrors(data){
  return $(".alert").text(data).removeClass("hide").addClass("show");
}

function hideErrors(){
  return $(".alert").removeClass("show").addClass("hide");
}

// Twitter share button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook share button
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=483002871881042";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

