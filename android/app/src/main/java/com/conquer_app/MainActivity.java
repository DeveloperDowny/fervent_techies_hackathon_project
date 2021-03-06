package com.conquer_app;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;

import com.facebook.react.ReactActivity;

import android.os.Bundle;
import android.os.PowerManager;
import android.provider.Settings;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Nudger";
    }

    public String getApplicationName(PackageManager pm, String packageName) {
        ApplicationInfo ai;
        try {
            ai = pm.getApplicationInfo(packageName, 0);
        } catch (final PackageManager.NameNotFoundException e) {
            ai = null;
        }
        final String appName = (String) (ai != null ? pm.getApplicationLabel(ai) : "(unknown)");
        return appName;
    }

    private List<HashMap<String, String>> getInstalledApps() {
        List<HashMap<String, String>> allInstalledApps = new ArrayList<>();
        PackageManager pm = getPackageManager();
        List<ApplicationInfo> apps = pm.getInstalledApplications(PackageManager.GET_META_DATA);

        for (ApplicationInfo app : apps) {
            if (pm.getLaunchIntentForPackage(app.packageName) != null) {
                HashMap<String, String> appHash = new HashMap<>();
                appHash.put("packageName", app.packageName);
                appHash.put("appName", getApplicationName(pm, app.packageName));
                allInstalledApps.add(appHash);
            }

        }
        return allInstalledApps;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
         createNotificationChannel("task_reminders", "Task Reminders",
                 "This channel handles all notifications regarding task reminders", NotificationManager.IMPORTANCE_MAX);
         createNotificationChannel("foreground_services", "Foreground Service",
                 "This channel handles that annoying notifications which can't be turned off due to some fucking Android Policy",
                 NotificationManager.IMPORTANCE_NONE);

        Log.d("obscure_tag", "application has started!");

        // if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        // Intent intent = new Intent();
        // String packageName = getPackageName();
        // PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
        // if (!pm.isIgnoringBatteryOptimizations(packageName)) {
        // Toast.makeText(MainActivity.this, "battery optimization permission is
        // stopping my app", Toast.LENGTH_LONG).show();
        // intent.setAction(Settings.ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS);
        //// intent.setData(Uri.parse("package:" + packageName));
        // startActivity(intent);
        // } else {
        //
        // Toast.makeText(MainActivity.this, "battery optimization permission is not a
        // problem", Toast.LENGTH_LONG).show();
        // }
        // }

        // if (checkAccessibilityPermission() == 0) {
        // Toast.makeText(MainActivity.this, "Permission denied..Redirecting to
        // accessibility service", Toast.LENGTH_SHORT).show();
        // Intent intent = new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS);
        // startActivity(intent);
        // } else if (checkAccessibilityPermission() == 1) {
        // Toast.makeText(MainActivity.this, "Permission is granted",
        // Toast.LENGTH_SHORT).show();
        // }

    }

    // public int checkAccessibilityPermission() {
    // int accessEnabled = -1;
    // try {
    // accessEnabled = Settings.Secure.getInt(this.getContentResolver(),
    // Settings.Secure.ACCESSIBILITY_ENABLED);
    // } catch (Settings.SettingNotFoundException e) {
    // e.printStackTrace();
    // }
    // return accessEnabled;
    // }

    private void createNotificationChannel(String channel_id, String channel_name, String channel_description,
                                           int channel_importance) {
        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(channel_id, channel_name, channel_importance);
            channel.setDescription(channel_description);
            // Register the channel with the system; you can't change the importance
            // or other notification behaviors after this
            NotificationManager notificationManager = getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }

}
