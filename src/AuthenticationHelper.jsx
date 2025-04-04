export function getCards() {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken == null) {
        authenticate();
    }

    return fetch(`http://localhost:8080/cards/overview`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'X-Access-Token': accessToken
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error("Cards Overview error", response.status);
        }
        return response.json();
    }).catch(error => {
        if (authenticate(true) === 0) {
            getCards();
        }
    })
}

export function authenticate(force) {
    const refreshToken = localStorage.getItem("refresh_token");
    const accessToken = localStorage.getItem("access_token");


    if (refreshToken == null) {
        window.location.href = "/private-cabinet/login";
    } else if (accessToken == null || force) {
        fetch(`http://localhost:8080/auth/refresh-access`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Refresh-Token': refreshToken
            }
        }).then(response => {
            if(!response.ok) {
                throw new Error("", response.status);
            }
            return response.json();
        }).then(jsonResponse => {
            localStorage.setItem("access_token", jsonResponse.access_token);
            return 0;
        }).catch(error => {
            return error.status;
        })
    }
}

export function signIn(email, password) {
    return fetch (`http://localhost:8080/auth/sign-in`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    }).then(async response => {
        if (!response.ok) {
            const error = Error("Ошибка аутентификациию");
            error.status = response.status;
            throw error;            
        }
        const jsonResponse = await response.json();
        localStorage.setItem("refresh_token", jsonResponse.refresh_token);
        localStorage.setItem("access_token", jsonResponse.access_token);
        return 0;
    }).catch(error => {
        return error.status;
    })
}

export function signUp(surname, name, patronymic, email, phone, passportSeries, passportNumber, password) {
    return fetch(`http://localhost:8080/auth/sign-up`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            'surname': surname,
            'name': name,
            'patronymic': patronymic,
            'email': email,
            'phone': phone,
            'passport_series': passportSeries,
            'passport_number': passportNumber,
            'password': password

        })
    }).then(response => {
        if (!response.ok) {
            const error = new Error("Ошибка регистрации.");
            error.status = response.status;
            throw error;
        }
        const jsonResponse = response.json();
        localStorage.setItem("access_token", jsonResponse.access_token);
        localStorage.setItem("refresh_token", jsonResponse.refresh_token);
        return 0;
    }).catch(error => {
        console.log(error.status);
        return error.status;
    })
}