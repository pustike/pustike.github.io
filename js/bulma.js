document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
function onBillingPlanChange(yearlyBilling) {
  let monthlyStarterPlan = '250</span><br/>Per Month', yearlyStarterPlan = '2,500</span><br/>Per Year';
  let monthlyStandardPlan = '500</span><br/>Per Company / Month', yearlyStandardPlan = '5,000</span><br/>Per Company / Year';
  let priceAmountSpan = '<span class="plan-price-amount"><span class="plan-price-currency">₹</span>';
  document.getElementById('starter-plan').innerHTML = priceAmountSpan + (yearlyBilling ? yearlyStarterPlan : monthlyStarterPlan);
  document.getElementById('standard-plan').innerHTML = priceAmountSpan + (yearlyBilling ? yearlyStandardPlan : monthlyStandardPlan);
}