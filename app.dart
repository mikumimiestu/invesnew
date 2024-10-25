import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Halaman Login Analis',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: LoginPage(),
    );
  }
}

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Halaman Login Analis'),
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Image.asset('../assets/public/img/IMG_7347.PNG', height: 100),
            SizedBox(height: 20),
            Text(
              'Login Analis',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            LoginForm(),
            SizedBox(height: 10),
            SignUpButton(),
          ],
        ),
      ),
    );
  }
}

class LoginForm extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        TextField(
          decoration: InputDecoration(
            labelText: 'Email',
            hintText: 'name@gmail.com',
          ),
          keyboardType: TextInputType.emailAddress,
        ),
        TextField(
          decoration: InputDecoration(
            labelText: 'Password',
            hintText: '********',
          ),
          obscureText: true,
        ),
        Align(
          alignment: Alignment.centerRight,
          child: TextButton(
            onPressed: () {
              // Tambahkan logika untuk reset password di sini
            },
            child: Text('Forgot password?'),
          ),
        ),
        ElevatedButton(
          onPressed: () {
            // Tambahkan logika untuk login di sini
          },
          child: Text('Log In'),
        ),
      ],
    );
  }
}

class SignUpButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        // Navigasi ke halaman sign up
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => SignUpPage()),
        );
      },
      child: Text('Sign Up'),
    );
  }
}

class SignUpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Sign Up'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Buat Akun Baru',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            SignUpForm(),
          ],
        ),
      ),
    );
  }
}

class SignUpForm extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        TextField(
          decoration: InputDecoration(
            labelText: 'Email',
            hintText: 'name@gmail.com',
          ),
          keyboardType: TextInputType.emailAddress,
        ),
        TextField(
          decoration: InputDecoration(
            labelText: 'Password',
            hintText: '********',
          ),
          obscureText: true,
        ),
        TextField(
          decoration: InputDecoration(
            labelText: 'Confirm Password',
            hintText: '********',
          ),
          obscureText: true,
        ),
        ElevatedButton(
          onPressed: () {
            // Tambahkan logika untuk sign up di sini
          },
          child: Text('Sign Up'),
        ),
      ],
    );
  }
}
