package com.example.makemitappv1;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;


public class manualcontrol extends AppCompatActivity {
    private Button biceptExt;
    private Button biceptRet;
    private Button forearmExt;
    private Button forearmRet;

    private Socket socket= null;
    private DataOutputStream out = null;

    private String ipaddr;
    private int port;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_manualcontrol);

        biceptExt = (Button) findViewById(R.id.extend);
        biceptExt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                networkManager("Bicept,1");
            }
        });

        biceptRet = (Button) findViewById(R.id.retract);
        biceptRet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                networkManager("Bicept,0");
            }
        });

        forearmExt= (Button) findViewById(R.id.open_grip);
        forearmExt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                networkManager("Forearm,1");
            }
        });

        forearmRet= (Button) findViewById(R.id.close_grip);
        forearmRet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                networkManager("Forearm,0");
            }
        });


    }

    private void networkManager(String msg) {
        // establish a connectio

        EditText text = (EditText)findViewById(R.id.IPAddress);
        ipaddr = text.getText().toString();

        EditText num = (EditText)findViewById(R.id.portNumber);
        port = Integer.parseInt(num.getText().toString());
        System.out.println(ipaddr +  String.valueOf(port)+ msg);
        try {
            socket = new Socket(ipaddr, port);
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Connected");

        OutputStream outputStream = null;
        try {
            outputStream = socket.getOutputStream();
        } catch (IOException e) {
            e.printStackTrace();
        }
        out = new DataOutputStream(outputStream);
        try {
            out.writeUTF(msg);
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            out.flush(); // send the message
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}