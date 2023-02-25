function MyFunction(){
  berat = $('#berat').val()
  tinggi = $('#tinggi').val()

  tinggi = tinggi / 100
  bmi = berat / (tinggi * tinggi)

  console.log(bmi);

  if (bmi < 18.5){
    $('#bmi').html('kurus harus lebih banyak makan')
  }else if (bmi < 25){
    $('#bmi').html('langsing')
  }else {
    $('#bmi').html('gemuk')
  }

}