<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Page</title>
    <link rel="stylesheet" href="signup.css">
</head>
<body>
    <header>
        <a href="login.php" class="back-icon">
            <img src="../assets/public/img/left-arrow.png" alt="Kembali" />
        </a>        
        <h1>Halaman Pendaftaran</h1>
    </header>

    <div class="signup-container">
        <h2>Daftar Akun Baru</h2>
        <form class="signup-form" action="signup.php" method="POST">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="name@gmail.com" required>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="********" required>
            <button type="submit">Daftar</button>
        </form>
    </div>

    <?php
    // Menghubungkan ke database
    $host = 'localhost'; // Ganti dengan host database Anda
    $db = 'your_database'; // Ganti dengan nama database Anda
    $user = 'your_username'; // Ganti dengan username database Anda
    $pass = 'your_password'; // Ganti dengan password database Anda

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Menangani pendaftaran
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $email = $_POST['email'];
            $password = $_POST['password'];

            // Hash password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Memasukkan data ke database
            $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (:email, :password)");
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $hashedPassword);

            if ($stmt->execute()) {
                echo "<script>alert('Pendaftaran berhasil! Silakan login.');</script>";
                // Redirect ke halaman login setelah pendaftaran
                header('Location: login.php');
                exit();
            } else {
                echo "<script>alert('Pendaftaran gagal. Silakan coba lagi.');</script>";
            }
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    ?>
</body>
</html>
