export interface IempArr {
    empId: number,
    empName: string,
    designation: string,
    department: string,
    salary: number,
    isPermanent: boolean,
    email: string,
    contact: number
}

export interface IstudentArr {
    rollNo: number,
    name: string,
    course: string,
    year: string,
    percentage: number,
    isPassed: boolean,
    email: string,
    contact: number
}


export interface IproductArr {
    prodId: number,
    prodName: string,
    category: string,
    price: number,
    stock: number,
    isAvailable: boolean,
    brand: string
}


export interface IcourseArr {
    courseId: number,
    courseName: string,
    duration: string,
    fees: number,
    mode: string,
    isActive: boolean,
    trainer: string
}

export interface IbookArr {
    bookId: number,
    title: string,
    author: string,
    price: number,
    pages: number,
    isAvailable: boolean,
    genre: string
}


export interface IcustomerArr {
    custId: number,
    name: string,
    city: string,
    age: number,
    email: string,
    isPrime: boolean,
    contact: number
}


export interface IorderArr {
    orderId: number,
    customerName: string,
    product: string,
    amount: number,
    status: "Delivered" | "Pending" | "Cancelled";
    date: string
}

export interface ImovieArr {
    movieId: number,
    title: string,
    genre: string,
    rating: number,
    releaseYear: number,
    isHit: boolean,
    language: "English" | "Hindi" | "Kannada" | "Telugu"
}


export interface IteacherArr {
    teacherId: number,
    name: string,
    subject: string,
    experience: number,
    salary: number,
    isFullTime: boolean,
    email: string
}

export interface IvehicleArr {
    vehicleId: number,
    brand: string,
    model: string,
    type: string,
    price: number,
    isAvailable: boolean,
    fuel: string
}