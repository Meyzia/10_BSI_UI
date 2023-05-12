// pin
const input = document.getElementById('pin');
const dots = document.querySelectorAll('.pin-dots span');

input.addEventListener('input', (e) => {
  const value = e.target.value;
  for (let i = 0; i < dots.length; i++) {
    if (i < value.length) {
      dots[i].classList.add('filled');
    } else {
      dots[i].classList.remove('filled');
    }
  }
});


function showHide() {
    var panelShow = document.getElementById('panel-show');

    if (panelShow.style.display == 'none') {
        panelShow.style.removeProperty('display');
    } else {
        panelShow.style.display = 'none';
    }

  }

function showHideInfo() {
    var infoPanel = document.getElementById('information');

    if (infoPanel.style.display == 'none') {
        infoPanel.style.removeProperty('display');
    } else {
        infoPanel.style.display = 'none';
    }

  }

  function showHideOption() {
    var cardNumberInput = document.getElementById('card-number-input');
    var opsiSaldo = document.getElementById('opsi-saldo');
    
    if (cardNumberInput.value === '') {
        opsiSaldo.style.display = 'none';
    } else {
        opsiSaldo.style.display = 'block';
    }
}

 //Payment Confirmation
 function setPaymentConfirmation(totalPrice, subTotal, accountNo, provider) {
    var totalPriceConfirm = $('#detail-col-total h6:nth-child(2) strong');
    totalPriceConfirm.text(totalPrice)
    var subtotalConfirm = $('#row-body-2 #detail-col h6:nth-child(2)');
    subtotalConfirm.text(subTotal);
    var payConfirm = $('#btn-confirm-1 strong');
    payConfirm.text('PAY ' + totalPrice);
    var identity = $('#nav-confirm .row:nth-child(2) .col h6');
    var fourAccountNo = accountNo.slice(-4);
    var fiveProviderChar = provider.slice(-6);
    identity.text(fiveProviderChar + '*****' + fourAccountNo + ' - ' + provider + ' KAMIL');
}

// Payment Details
function setPaymentDetails(imgSrc, accountNo, provider, amount, totalPrice) {
    // Details Header
    // Set Provider Picture
    var setImg = document.getElementById('provider-icon');
    setImg.src = imgSrc;
    // Set Account No
    var setAccountNo = document.getElementById('card-info').getElementsByTagName('h6')[0];
    setAccountNo.textContent = accountNo;
    // Set Provider
    var setProvider = document.getElementById('card-info').getElementsByTagName('h6')[1];
    setProvider.textContent = provider;
    // Set Amount
    var setAmount = document.getElementById('card-info').getElementsByTagName('h6')[2];
    setAmount.textContent = amount;

    //Details Body
    //Amount
    var setAmountBody = document.getElementById('detail-col').getElementsByTagName('h6')[1];
    setAmountBody.textContent = amount;

    //Details Footer
    var setTotalPrice =  $('#detail-col-confirm h6:nth-child(2)');
    setTotalPrice.text(totalPrice);
}
  
 //Payment Status
 function setPaymentStatus(totalPrice, amount) {
    var totalStatus = $('#modal-payment-status .modal-dialog .modal-content .modal-box .modal-body > .row .col-8 h4');
    totalStatus.text(totalPrice);
    var amountStatus = $('#panel-show .row:nth-child(2) .col h6:nth-child(2)');
    amountStatus.text(amount);

    //Time
    const now = new Date();

    const year = now.getFullYear();
    const month = now.toLocaleString('default', { month: 'short' });
    const date = now.getDate();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const formattedTime = `${date} ${month} ${year} ${hours}:${minutes}:${seconds}`;

    var datetime = $('#panel-show .row:nth-child(3) .col h6:nth-child(2)');
    datetime.text(formattedTime);
}

$(document).ready(function() {

    if ($("#opsi-saldo").css("display") === "none") {
        $("body").css("height", "100vh");
    } 

    $('#card-input').on('input', function() {
        if ($(this).val() != '') {
        $('#opsi-saldo').show();
        $("body").css("height", "100%");
        } else {
        $('#opsi-saldo').hide();
        $("body").css("height", "100vh");
        }
    });
   
    $("#saldo-20rb").click(function() {
    
        // Mendapatkan pp provider
        const imgSrc = $('#provider .card-body img').attr('src');
        // Mendapatkan nilai provider
        const provider = $("#provider .card-body .card-subtitle").text();
        // Mendapatkan no rek
        const accountNo = $("#card-input").val();
        // Mendapatkan nilai amount 
        var amount = 'Rp20.000'
        // Mendapatkan admin fee
        var adminFee = 'Rp1.500';

        // Menghitung sub total dan total price
        var subTotal = amount;
        var totalPrice = 'Rp21.500';

        $('#checkbox input[type="checkbox"]').on('click', function() {
            if($(this).is(':checked')) {
              $('#btn-confirm').prop('disabled', false);
            } else {
              $('#btn-confirm').prop('disabled', true);
            }
          });

        setPaymentDetails(imgSrc, accountNo, provider, amount, totalPrice);
        setPaymentConfirmation(totalPrice, subTotal, accountNo, provider);
        setPaymentStatus(totalPrice, amount);
                       
    });

    $("#saldo-50rb").click(function() {
    
        // Mendapatkan pp provider
        const imgSrc = $('#provider .card-body img').attr('src');
        // Mendapatkan nilai provider
        const provider = $("#provider .card-body .card-subtitle").text();
        // Mendapatkan no rek
        const accountNo = $("#card-input").val();
        // Mendapatkan nilai amount 
        var amount = 'Rp50.000'
        // Mendapatkan admin fee
        var adminFee = 'Rp1.500';

        // Menghitung sub total dan total price
        var subTotal = amount;
        var totalPrice = 'Rp51.500';


        $('#checkbox input[type="checkbox"]').on('click', function() {
            if($(this).is(':checked')) {
              $('#btn-confirm').prop('disabled', false);
            } else {
              $('#btn-confirm').prop('disabled', true);
            }
          });

       

        setPaymentDetails(imgSrc, accountNo, provider, amount, totalPrice);
        setPaymentConfirmation(totalPrice, subTotal, accountNo, provider);
        setPaymentStatus(totalPrice, amount);               
    });

    $("#saldo-100rb").click(function() {
    
        // Mendapatkan pp provider
        const imgSrc = $('#provider .card-body img').attr('src');
        // Mendapatkan nilai provider
        const provider = $("#provider .card-body .card-subtitle").text();
        // Mendapatkan no rek
        const accountNo = $("#card-input").val();
        // Mendapatkan nilai amount 
        var amount = 'Rp100.000'
        // Mendapatkan admin fee
        var adminFee = 'Rp1.500';

        // Menghitung sub total dan total price
        var subTotal = amount;
        var totalPrice = 'Rp101.500';


        $('#checkbox input[type="checkbox"]').on('click', function() {
            if($(this).is(':checked')) {
              $('#btn-confirm').prop('disabled', false);
            } else {
              $('#btn-confirm').prop('disabled', true);
            }
          });

       

        setPaymentDetails(imgSrc, accountNo, provider, amount, totalPrice);
        setPaymentConfirmation(totalPrice, subTotal, accountNo, provider);
        setPaymentStatus(totalPrice, amount);               
    });
   
    $("#saldo-200rb").click(function() {
    
        // Mendapatkan pp provider
        const imgSrc = $('#provider .card-body img').attr('src');
        // Mendapatkan nilai provider
        const provider = $("#provider .card-body .card-subtitle").text();
        // Mendapatkan no rek
        const accountNo = $("#card-input").val();
        // Mendapatkan nilai amount 
        var amount = 'Rp200.000'
        // Mendapatkan admin fee
        var adminFee = 'Rp1.500';

        // Menghitung sub total dan total price
        var subTotal = amount;
        var totalPrice = 'Rp201.500';


        $('#checkbox input[type="checkbox"]').on('click', function() {
            if($(this).is(':checked')) {
              $('#btn-confirm').prop('disabled', false);
            } else {
              $('#btn-confirm').prop('disabled', true);
            }
          });

       

        setPaymentDetails(imgSrc, accountNo, provider, amount, totalPrice);
        setPaymentConfirmation(totalPrice, subTotal, accountNo, provider);
        setPaymentStatus(totalPrice, amount);               
    });

    $("#saldo-300rb").click(function() {
    
        // Mendapatkan pp provider
        const imgSrc = $('#provider .card-body img').attr('src');
        // Mendapatkan nilai provider
        const provider = $("#provider .card-body .card-subtitle").text();
        // Mendapatkan no rek
        const accountNo = $("#card-input").val();
        // Mendapatkan nilai amount 
        var amount = 'Rp300.000'
        // Mendapatkan admin fee
        var adminFee = 'Rp1.500';

        // Menghitung sub total dan total price
        var subTotal = amount;
        var totalPrice = 'Rp301.500';


        $('#checkbox input[type="checkbox"]').on('click', function() {
            if($(this).is(':checked')) {
              $('#btn-confirm').prop('disabled', false);
            } else {
              $('#btn-confirm').prop('disabled', true);
            }
          });

       

        setPaymentDetails(imgSrc, accountNo, provider, amount, totalPrice);
        setPaymentConfirmation(totalPrice, subTotal, accountNo, provider);
        setPaymentStatus(totalPrice, amount);               
    });

    $("#saldo-400rb").click(function() {
    
        // Mendapatkan pp provider
        const imgSrc = $('#provider .card-body img').attr('src');
        // Mendapatkan nilai provider
        const provider = $("#provider .card-body .card-subtitle").text();
        // Mendapatkan no rek
        const accountNo = $("#card-input").val();
        // Mendapatkan nilai amount 
        var amount = 'Rp400.000'
        // Mendapatkan admin fee
        var adminFee = 'Rp1.500';

        // Menghitung sub total dan total price
        var subTotal = amount;
        var totalPrice = 'Rp401.500';


        $('#checkbox input[type="checkbox"]').on('click', function() {
            if($(this).is(':checked')) {
              $('#btn-confirm').prop('disabled', false);
            } else {
              $('#btn-confirm').prop('disabled', true);
            }
          });

       

        setPaymentDetails(imgSrc, accountNo, provider, amount, totalPrice);
        setPaymentConfirmation(totalPrice, subTotal, accountNo, provider);
        setPaymentStatus(totalPrice, amount);               
    });

    $("#saldo-500rb").click(function() {
    
        // Mendapatkan pp provider
        const imgSrc = $('#provider .card-body img').attr('src');
        // Mendapatkan nilai provider
        const provider = $("#provider .card-body .card-subtitle").text();
        // Mendapatkan no rek
        const accountNo = $("#card-input").val();
        // Mendapatkan nilai amount 
        var amount = 'Rp500.000'
        // Mendapatkan admin fee
        var adminFee = 'Rp1.500';

        // Menghitung sub total dan total price
        var subTotal = amount;
        var totalPrice = 'Rp501.500';

        $('#checkbox input[type="checkbox"]').on('click', function() {
            if($(this).is(':checked')) {
              $('#btn-confirm').prop('disabled', false);
            } else {
              $('#btn-confirm').prop('disabled', true);
            }
          });

        setPaymentDetails(imgSrc, accountNo, provider, amount, totalPrice);
        setPaymentConfirmation(totalPrice, subTotal, accountNo, provider);
        setPaymentStatus(totalPrice, amount);               
    });
});


