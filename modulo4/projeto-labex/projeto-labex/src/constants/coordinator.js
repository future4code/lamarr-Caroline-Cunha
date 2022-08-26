

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trip/${id}`)
}


export const goToAdimCreate = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToListPage = (navigate) => {
    navigate("/trips/list")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToFormApplicPage = (navigate) => {
    navigate("/trips/application")
}

export const goToBack = (navigate) => {
    navigate(-1)
}