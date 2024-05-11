import React, { useState } from 'react'; 
import { 
	View, Text, TextInput, 
	TouchableOpacity, StyleSheet 
} from 'react-native'; 

const App = () => { 
	const [otp, setOtp] = useState(''); 
	const [userInput, setUserInput] = useState(''); 
	const [isValid, setIsValid] = useState(null); 
	// State to control OTP box visibility 
	const [showOtpBox, setShowOtpBox] = useState(false); 

	// Function to generate a random OTP 
	const generateOtp = () => { 
		let generatedOtp = ''; 
		const characters = 
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 

		for (let i = 0; i < 6; i++) { 
			generatedOtp += characters 
				.charAt(Math 
					.floor(Math.random() * characters.length)); 
		} 

		// Set the generated OTP and reset the validity status 
		setOtp(generatedOtp); 
		setIsValid(null); 
		// Show the OTP box after generating OTP 
		setShowOtpBox(true); 
	}; 

	// Function to validate the entered OTP 
	const validateOtp = () => { 
		if (userInput === otp) { 
			setIsValid(true); 
		} else { 
			setIsValid(false); 
		} 
	}; 

	return ( 
		<View style={styles.container}> 
			<View style={styles.box}> 
				<Text style={styles.title}> 
					OTP Generator | Validator 
				</Text> 
				<TouchableOpacity style={styles.button} 
					onPress={generateOtp}> 
					<Text style={styles.buttonText}> 
						Generate OTP 
					</Text> 
				</TouchableOpacity> 
				{showOtpBox && ( 
					// Conditionally render the OTP box 
					<View style={styles.otpBox}> 
						<Text style= 
							{ 
								[styles.otp, { color: 'black' }] 
							}> 
							{otp} 
						</Text> 
					</View> 
				)} 
				<TextInput 
					style={styles.input} 
					placeholder="Enter OTP"
					value={userInput} 
					onChangeText={setUserInput} 
				/> 
				<TouchableOpacity style={styles.button} 
					onPress={validateOtp}> 
					<Text style={styles.buttonText}> 
						Validate OTP 
					</Text> 
				</TouchableOpacity> 
				{/* Display messages based on the validity status */} 
				{isValid === true && 
					<Text style={styles.validText}> 
						Valid OTP 
					</Text>} 
				{isValid === false && 
					<Text style={styles.invalidText}> 
						Invalid OTP 
					</Text>} 

			</View> 
		</View> 
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center', 
	}, 
	box: { 
		width: '80%', 
		backgroundColor: '#FFF', 
		borderRadius: 10, 
		padding: 20, 
		shadowColor: '#000', 
		shadowOffset: { 
			width: 0, 
			height: 2, 
		}, 
		shadowOpacity: 0.25, 
		shadowRadius: 3.84, 
		elevation: 5, 
	}, 
	title: { 
		fontSize: 24, 
		marginBottom: 20, 
	}, 
	button: { 
		backgroundColor: '#007AFF', 
		paddingHorizontal: 30, 
		paddingVertical: 15, 
		borderRadius: 5, 
		marginTop: 20, 
	}, 
	buttonText: { 
		color: '#FFF', 
		fontSize: 18, 
	}, 
	input: { 
		borderWidth: 1, 
		borderColor: '#007AFF', 
		borderRadius: 5, 
		paddingHorizontal: 10, 
		paddingVertical: 5, 
		marginTop: 20, 
		width: '100%', 
	}, 
	otpBox: { 
		marginTop: 20, 
		backgroundColor: 'white', 
		borderRadius: 5, 
		padding: 10, 
		borderWidth: 2, 
		borderColor: 'grey', 
	}, 
	otp: { 
		fontSize: 24, 
	}, 
	validText: { 
		fontSize: 20, 
		color: 'green', 
		marginTop: 20, 
	}, 
	invalidText: { 
		fontSize: 20, 
		color: 'red', 
		marginTop: 20, 
	}, 
}); 

export default App; 
