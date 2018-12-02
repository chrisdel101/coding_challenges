function CustomerBooking (bookingId, customerName, film, showDate){
  this.bookingId = bookingId
  this.customerName = customerName;
  this.film = film;
  this.showDate = showDate;
}

CustomerBooking.prototype.getCustomerName = function(){
  return this.customerName;
}
CustomerBooking.prototype.setCustomerName = function(customerName) {
  this.customerName = customerName;
}
CustomerBooking.prototype.getShowDate = function() {
  return this.showDate;
}
CustomerBooking.prototype.setShowDate = function(showDate) {
  this.showDate = showDate;
}
