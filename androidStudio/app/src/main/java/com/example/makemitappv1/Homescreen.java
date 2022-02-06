package com.example.makemitappv1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Homescreen extends AppCompatActivity {
    private Button button2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_homescreen);

        button2 = (Button) findViewById(R.id.manual_control);
        button2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openManualControl();
            }
        });



    }
    public void openManualControl(){
        Intent intent2 = new Intent(this, manualcontrol.class);
        startActivity(intent2);
    }


}