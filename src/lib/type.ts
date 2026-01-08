interface RoomData {
  title: string;
  occupancy: string;
  acType: 'AC' | 'Non-AC';
  price: number;
  image: string;
  features: string[];
}

interface RoomCardProps extends RoomData {
  onBookNow: () => void;
}

 interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomTitle: string;
  roomPrice: number;
  roomType: string;
}


interface FacilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

