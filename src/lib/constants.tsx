import { Wifi, UtensilsCrossed, Shield, Zap, Droplet, Sparkles, Car, Camera } from 'lucide-react';


export const rooms: RoomData[] = [
    {
      title: 'Single Room',
      occupancy: '1 Person',
      acType: 'AC',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1731585508270-6d3643384bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwcm9vbSUyMGJlZHxlbnwxfHx8fDE3Njc4NzEzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Attached Bathroom', 'Study Table & Chair', 'Wardrobe', '24/7 Power Backup']
    },
    {
      title: 'Single Room',
      occupancy: '1 Person',
      acType: 'Non-AC',
      price: 9000,
      image: 'https://images.unsplash.com/photo-1731585508270-6d3643384bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwcm9vbSUyMGJlZHxlbnwxfHx8fDE3Njc4NzEzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Attached Bathroom', 'Study Table & Chair', 'Wardrobe', 'Ceiling Fan']
    },
    {
      title: 'Double Sharing',
      occupancy: '2 Persons',
      acType: 'AC',
      price: 8000,
      image: 'https://images.unsplash.com/photo-1709805619372-40de3f158e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3ODcwNzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Attached Bathroom', '2 Study Tables', '2 Wardrobes', '24/7 Power Backup']
    },
    {
      title: 'Double Sharing',
      occupancy: '2 Persons',
      acType: 'Non-AC',
      price: 6000,
      image: 'https://images.unsplash.com/photo-1709805619372-40de3f158e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3ODcwNzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Attached Bathroom', '2 Study Tables', '2 Wardrobes', 'Ceiling Fan']
    },
    {
      title: 'Triple Sharing',
      occupancy: '3 Persons',
      acType: 'AC',
      price: 6500,
      image: 'https://images.unsplash.com/photo-1709805619372-40de3f158e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3ODcwNzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Attached Bathroom', '3 Study Tables', '3 Wardrobes', '24/7 Power Backup']
    },
    {
      title: 'Triple Sharing',
      occupancy: '3 Persons',
      acType: 'Non-AC',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1709805619372-40de3f158e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3ODcwNzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Attached Bathroom', '3 Study Tables', '3 Wardrobes', 'Ceiling Fan']
    },
  ];

export const facilities: FacilityCardProps[] = [
    {
      icon: <Wifi size={40} />,
      title: 'High-Speed WiFi',
      description: 'Unlimited high-speed internet connectivity throughout the premises for all your online needs.'
    },
    {
      icon: <UtensilsCrossed size={40} />,
      title: 'Quality Food Service',
      description: 'Nutritious and hygienic meals prepared by experienced chefs. Special dietary requirements catered.'
    },
    {
      icon: <Shield size={40} />,
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV surveillance ensuring a safe living environment.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Power Backup',
      description: 'Uninterrupted power supply with backup generators for all common areas and rooms.'
    },
    {
      icon: <Droplet size={40} />,
      title: 'Water Purifier',
      description: 'RO water purifiers on each floor providing safe drinking water 24/7.'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Housekeeping',
      description: 'Regular cleaning and maintenance services to keep your living space fresh and tidy.'
    },
    {
      icon: <Car size={40} />,
      title: 'Parking Space',
      description: 'Secure parking facility for bikes and cars with proper surveillance.'
    },
    {
      icon: <Camera size={40} />,
      title: 'CCTV Monitoring',
      description: 'Complete CCTV coverage in all common areas for enhanced safety and security.'
    }
  ];  