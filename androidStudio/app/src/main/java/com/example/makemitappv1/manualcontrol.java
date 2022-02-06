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
    private NetworkManager NM;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_manualcontrol);

         NM = new NetworkManager();



        biceptExt = (Button) findViewById(R.id.extend);
        biceptExt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                EditText text = (EditText) findViewById(R.id.IPAddress);
                String ipaddr = text.getText().toString();
                EditText num = (EditText) findViewById(R.id.portNumber);
                int port = Integer.parseInt(num.getText().toString());
                //System.out.println(ipaddr + String.valueOf(port) + msg);
                NM.setPortIP(ipaddr,port);

                NM.execute("bicept,0");
            }
        });

        biceptRet = (Button) findViewById(R.id.retract);
        biceptRet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //networkManager("Bicept,0");
            }
        });

        forearmExt= (Button) findViewById(R.id.open_grip);
        forearmExt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //networkManager("Forearm,1");
            }
        });

        forearmRet= (Button) findViewById(R.id.close_grip);
        forearmRet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //networkManager("Forearm,0");
            }
        });


    }

}