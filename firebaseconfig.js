    const firebaseConfig = {
        apiKey: "AIzaSyDqDU6p8BH1hTqox7f5Sj1ySTWifIP2818",
        authDomain: "wigdos-9aa6a.firebaseapp.com",
        projectId: "wigdos-9aa6a",
        storageBucket: "wigdos-9aa6a.appspot.com",
        messagingSenderId: "124867645389",
        appId: "1:124867645389:web:4530e19e575669f3cabe84",
        measurementId: "G-1KTKSSCJ33"
    };
    
    // Initialize Firebase only if available
    try {
        if (typeof firebase !== 'undefined') {
            firebase.initializeApp(firebaseConfig);
        } else {
            console.log('[Firebase] Firebase not available, continuing without Firebase features');
        }
    } catch (error) {
        console.log('[Firebase] Failed to initialize Firebase:', error);
    }