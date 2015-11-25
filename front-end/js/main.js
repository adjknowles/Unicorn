$(document).ready(function(){
  $("form").on("submit", submitForm);
  $("#nav-login").on("click", login);
  $("#nav-logout").on("click", logout);
  $("#nav-register").on("click", register);
  $("#add-startup").on("click", showAddStartup);
  $("#add-workspace").on("click", showAddWorkspace);
  hideErrors();
  checkLoginState();
});

function login(){
  $("section").hide();
  $("#google-map-container").show();
  $("#login").show();
}

function logout(){
  event.preventDefault();
  removeToken();
  return loggedOutState();
}

function register(){
  $("section").hide();
  $("#google-map-container").show();
  $("#register").show();
}

function showAddStartup(){
  $("section").hide();
  $("#google-map-container").show();
  $("#new-startup").show();
}

function showAddWorkspace(){
  $("section").hide();
  $("#google-map-container").show();
  $("#new-workspace").show();
}

function submitForm(){
  event.preventDefault();

  var method = $(this).attr("method");
  var url    = "http://localhost:3000/api" + $(this).attr("action");
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
  $("#google-map-container, .logged-in").show();
  $("#results, .logged-in").show();
  // Commented out, so that logged in state isn't checked
  // since we don't have the controllers for the startups and workspaces
  // return [getStartups(), getWorkspaces()];
}

function loggedOutState(){
  $(".logged-in").hide();
  $(".logged-out").show();
  $("section").hide();
  $("#google-map-container").show();
  return hideResults();
}

function getStartups(){
  return ajaxRequest("get", "http://localhost:3000/api/startups", null, displayResults);
}

function getWorkspaces(){
  return ajaxRequest("get", "http://localhost:3000/api/workspaces", null, displayResults);
}

function displayResults(data){
  hideErrors();
  hideResults();
  displayStartups();
  displayWorkspaces();
}

function displayStartups(data){
  return $('results').prepend('<p>Startups here!</p>');
  // return _.each(data.startups, function(startup){
  //   $('results').prepend(startup(startup));
  // });
}

function displayWorkspaces(data){
  return $('results').prepend('<p>Workspaces here!</p>');
  // return _.each(data.workspaces, function(workspace){
  //   $('results').prepend(workspace(workspace));
  // });
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
