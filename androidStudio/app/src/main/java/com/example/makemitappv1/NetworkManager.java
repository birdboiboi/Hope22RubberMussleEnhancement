package com.example.makemitappv1;

import android.os.AsyncTask;

import java.io.DataOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

public class NetworkManager  extends AsyncTask<String,Void,Void> {

    private Socket socket = null;
    private DataOutputStream out = null;

    public String ipaddr;
    public int port;

    public void setPortIP(String ip, int port) {
        this.ipaddr = ip;
        this.port = port;
    }

    protected Void doInBackground(String... voids) {
        // establish a connectio


        String msg = voids[0];

        try {
            socket = new Socket(ipaddr, port);
            System.out.println("Connected");
            OutputStream outputStream = null;
            outputStream = socket.getOutputStream();
            out = new DataOutputStream(outputStream);
            out.writeUTF(msg);
            out.flush(); // send the message
            out.close();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }
}
