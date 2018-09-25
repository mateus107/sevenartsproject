    <?php

 $user ="mateus107";
 $pass ="1234";
 $banco ="mateus107_news";
 $host ="localhost";
 $url ="mysql:host=$host;dbname=$banco";

 try{
   $conexao = new PDO($url, $user, $pass);

   $sql = "INSERT INTO contato(nome, email, comente) VALUES (:nome,:email, :comente)";

   $comando = $conexao->prepare($sql);

   $comando->bindParam(':nome', $_POST['nome']);
   $comando->bindParam(':email', $_POST['email']);
   $comando->bindParam(':comente', $_POST['comente']);

   $comando->execute();
   header('Location: listarcontatos.php');
  } catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
?>

