package com.zelenazona;

import android.content.Intent; // <-- include if not already there
import com.tkporter.sendsms.SendSMSPackage;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

		@Override
		public void onActivityResult(int requestCode, int resultCode, Intent data) {
			//probably some other stuff here
			SendSMSPackage.getInstance().onActivityResult(requestCode, resultCode, data);
		}


		/**
		 * Returns the name of the main component registered from JavaScript.
		 * This is used to schedule rendering of the component.
		 */
		@Override
		protected String getMainComponentName() {
				return "ZelenaZona";
		}
}
