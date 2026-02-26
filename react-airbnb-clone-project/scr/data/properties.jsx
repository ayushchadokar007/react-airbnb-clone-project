import prop1 from "../assets/images/prop1.png";
import prop2 from "../assets/images/prop2.png";
import prop3 from "../assets/images/prop3.png";
import prop4 from "../assets/images/prop4.png";
import prop5 from "../assets/images/prop5.png";
import prop6 from "../assets/images/prop6.png";
import prop7 from "../assets/images/prop7.png";
import prop8 from "../assets/images/prop8.png";

const images = [prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8];

const sections = [
  {
    title: "Available next month in New Delhi",
    properties: [
      { id: 1, image: images[0], title: "Place to stay in New Delhi", price: "₹5,419 for 2 nights", rating: 4.83, badge: "Guest favourite" },
      { id: 2, image: images[1], title: "Flat in New Delhi", price: "₹4,099 for 2 nights", rating: 4.96, badge: "Guest favourite" },
      { id: 3, image: images[2], title: "Room in New Delhi", price: "₹5,304 for 2 nights", rating: 4.38, badge: "Guest favourite" },
      { id: 4, image: images[3], title: "Place to stay in New Delhi", price: "₹2,509 for 2 nights", rating: 4.97, badge: "Guest favourite" },
      { id: 5, image: images[4], title: "Flat in New Delhi", price: "₹9,876 for 2 nights", rating: 4.86, badge: "Guest favourite" },
      { id: 36, image: images[4], title: "Guest house in Majorda", price: "₹7,589 for 2 nights", rating: 4.63, badge: null },
      { id: 37, image: images[6], title: "Guest suite in Canacona", price: "₹3,086 for 2 nights", rating: 4.96, badge: "Guest favourite" },
      { id: 38, image: images[1], title: "Guest house in Canacona", price: "₹2,898 for 2 nights", rating: 4.95, badge: "Guest favourite" },
      { id: 39, image: images[7], title: "Flat in Varca", price: "₹5,695 for 2 nights", rating: 4.87, badge: "Guest favourite" },
      { id: 40, image: images[5], title: "Apartment in Chauri", price: "₹6,563 for 2 nights", rating: 4.93, badge: "Guest favourite" },
    ],
  },
  {
    title: "Available in Jaipur this weekend",
    properties: [
      { id: 6, image: images[5], title: "Apartment in Jaipur", price: "₹7,323 for 3 nights", rating: 4.89, badge: "Guest favourite" },
      { id: 7, image: images[6], title: "Room in Jaipur", price: "₹3,766 for 3 nights", rating: 4.67, badge: null },
      { id: 8, image: images[7], title: "Room in Ram Nagar", price: "₹7,615 for 3 nights", rating: 4.84, badge: "Guest favourite" },
      { id: 9, image: images[2], title: "Apartment in Civil Lines", price: "₹4,917 for 3 nights", rating: 4.48, badge: "Guest favourite" },
      { id: 10, image: images[0], title: "Flat in Jaipur", price: "₹4,364 for 3 nights", rating: 4.94, badge: "Guest favourite" },
      { id: 7, image: images[6], title: "Room in Jaipur", price: "₹3,766 for 3 nights", rating: 4.67, badge: null },
    ],
  },
  {
    title: "Popular homes in Varanasi",
    properties: [
      { id: 11, image: images[3], title: "Place to stay in Varanasi", price: "₹3,070 for 2 nights", rating: 4.91, badge: "Guest favourite" },
      { id: 12, image: images[4], title: "Room in Varanasi", price: "₹6,925 for 2 nights", rating: 4.99, badge: "Guest favourite" },
      { id: 13, image: images[1], title: "Flat in Varanasi", price: "₹3,370 for 2 nights", rating: 4.99, badge: "Guest favourite" },
      { id: 14, image: images[6], title: "Place to stay in Varanasi", price: "₹2,988 for 2 nights", rating: 4.87, badge: null },
      { id: 15, image: images[5], title: "Home in Sidghirbagh", price: "₹4,018 for 2 nights", rating: 4.92, badge: null },
    ],
  },
  {
    title: "Popular homes in North Goa",
    properties: [
      { id: 16, image: images[4], title: "Flat in Arpora", price: "₹5,791 for 3 nights", rating: 5.0, badge: "Guest favourite" },
      { id: 17, image: images[7], title: "Flat in Vagator", price: "₹7,904 for 3 nights", rating: 5.0, badge: "Guest favourite" },
      { id: 18, image: images[2], title: "Flat in Candolim", price: "₹1,898 for 2 nights", rating: 4.77, badge: "Guest favourite" },
      { id: 19, image: images[0], title: "Flat in Siolim", price: "₹6,300 for 2 nights", rating: 5.0, badge: null },
      { id: 20, image: images[3], title: "Flat in Calangute", price: "₹7,057 for 2 nights", rating: 4.83, badge: null },
    ],
  },
  {
    title: "Places to stay in Udaipur",
    properties: [
      { id: 21, image: images[6], title: "Flat in Udaipur", price: "₹3,147 for 2 nights", rating: 5.0, badge: null },
      { id: 22, image: images[1], title: "Flat in Udaipur", price: "₹8,650 for 2 nights", rating: 5.0, badge: "Guest favourite" },
      { id: 23, image: images[5], title: "Home in Udaipur", price: "₹6,362 for 2 nights", rating: 4.86, badge: null },
      { id: 24, image: images[7], title: "Home in Udaipur", price: "₹1,018 for 2 nights", rating: 4.98, badge: "Guest favourite" },
      { id: 25, image: images[3], title: "Apartment in Udaipur", price: "₹5,848 for 2 nights", rating: 4.86, badge: "Guest favourite" },
    ],
  },
  {
    title: "Check out homes in Gurgaon District",
    properties: [
      { id: 26, image: images[0], title: "Flat in Gurugram", price: "₹6,000 for 2 nights", rating: 4.92, badge: null },
      { id: 27, image: images[2], title: "Flat in Gurugram", price: "₹2,371 for 2 nights", rating: 4.58, badge: "Guest favourite" },
      { id: 28, image: images[4], title: "Home in Gurugram", price: "₹5,820 for 2 nights", rating: 5.0, badge: "Guest favourite" },
      { id: 29, image: images[6], title: "Flat in Sector 47", price: "₹8,918 for 2 nights", rating: 4.97, badge: "Guest favourite" },
      { id: 30, image: images[1], title: "Place to stay in Gurugram", price: "₹3,356 for 2 nights", rating: 5.0, badge: "Guest favourite" },
    ],
  },
  {
    title: "Homes in Pune",
    properties: [
      { id: 31, image: images[5], title: "Flat in Pune City", price: "₹5,876 for 2 nights", rating: 5.0, badge: "Guest favourite" },
      { id: 32, image: images[7], title: "Guest suite in Pune City", price: "₹4,679 for 3 nights", rating: 4.80, badge: "Guest favourite" },
      { id: 33, image: images[3], title: "Flat in Pune City", price: "₹5,444 for 3 nights", rating: 4.95, badge: "Guest favourite" },
      { id: 34, image: images[0], title: "Apartment in Pune City", price: "₹6,400 for 2 nights", rating: 4.86, badge: "Guest favourite" },
      { id: 35, image: images[2], title: "Apartment in Pune", price: "₹6,887 for 2 nights", rating: 4.75, badge: "Guest favourite" },
    ],
  },
  {
    title: "Available next month in South Goa",
    properties: [
      { id: 36, image: images[4], title: "Guest house in Majorda", price: "₹7,589 for 2 nights", rating: 4.63, badge: null },
      { id: 37, image: images[6], title: "Guest suite in Canacona", price: "₹3,086 for 2 nights", rating: 4.96, badge: "Guest favourite" },
      { id: 38, image: images[1], title: "Guest house in Canacona", price: "₹2,898 for 2 nights", rating: 4.95, badge: "Guest favourite" },
      { id: 39, image: images[7], title: "Flat in Varca", price: "₹5,695 for 2 nights", rating: 4.87, badge: "Guest favourite" },
      { id: 40, image: images[5], title: "Apartment in Chauri", price: "₹6,563 for 2 nights", rating: 4.93, badge: "Guest favourite" },
    ],
  },
  {
    title: "Stay in Bhopal",
    properties: [
      { id: 41, image: images[0], title: "Home in Bhopal", price: "₹3,515 for 2 nights", rating: 4.86, badge: "Guest favourite" },
      { id: 42, image: images[3], title: "Flat in Shahpura", price: "₹7,003 for 2 nights", rating: 4.98, badge: "Guest favourite" },
      { id: 43, image: images[2], title: "Flat in Bhopal", price: "₹6,387 for 3 nights", rating: 5.0, badge: "Guest favourite" },
      { id: 44, image: images[7], title: "Bed and breakfast in Bhopal", price: "₹2,450 for 2 nights", rating: 4.82, badge: "Guest favourite" },
      { id: 45, image: images[4], title: "Home in Arera Colony", price: "₹5,341 for 2 nights", rating: 4.96, badge: null },
    ],
  },
];

export default sections;
