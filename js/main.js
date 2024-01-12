console.log("Hello World!");                          // greatings

// global head links eg...CSS FILES/BOOTSTRAP CSS/ect....
document.getElementsByTagName("head")[0].innerHTML = `
<!-- BOOTSTRAP CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<!-- global CSS -->
<link rel="stylesheet" href="./css/style.css">
<link rel="stylesheet" href="../css/style.css">

<!-- navbar CSS -->
<link rel="stylesheet" href="./css/navbar.css">
<link rel="stylesheet" href="../css/navbar.css">

<!-- index CSS -->
<link rel="stylesheet" href="./css/index.css">
`;




// global body links eg...JS FILES/BOOTSTRAP JS/ect...
document.write(`
<!-- BOOTSTRAP JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<!-- fontawesome -->
<script src="https://kit.fontawesome.com/94eb56d79c.js" crossorigin="anonymous"></script>




<!-- COMPONENTS -->

<!-- navbar -->
<script src="./components/navbar.js"></script>
<script src="../components/navbar.js"></script>

`);