import { useState } from 'react';
import { X, Calendar, User, CreditCard } from 'lucide-react';


export function BookingModal({ isOpen, onClose, roomTitle, roomPrice, roomType }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    fatherName: '',
    guardianPhone: '',
    moveInDate: '',
    duration: '1',
    emergencyContact: '',
    idProof: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process booking
      console.log('Booking submitted:', { ...formData, roomTitle, roomPrice, roomType });
      setBookingConfirmed(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setBookingConfirmed(false);
        setStep(1);
        setFormData({
          name: '',
          email: '',
          phone: '',
          college: '',
          fatherName: '',
          guardianPhone: '',
          moveInDate: '',
          duration: '1',
          emergencyContact: '',
          idProof: ''
        });
        onClose();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  const totalAmount = roomPrice * parseInt(formData.duration || '1');
  const securityDeposit = roomPrice * 2;
  const grandTotal = totalAmount + securityDeposit;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-2xl w-full md:my-8">
        {/* Header */}
        <div className="flex items-center justify-between py-3 px-6 md:px-6 md:py-6 border-b">
          <div>
            <h2 className="md:text-2xl text-gray-900">Book Your Room</h2>
            <p className="text-gray-600">{roomTitle} - {roomType}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        {!bookingConfirmed && (
          <div className="flex items-center justify-center gap-2 py-3 px-6 md:px-6 md:py-6 border-b">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                    step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-16 h-1 ${
                      step > num ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="py-3 px-6 md:px-6 md:py-6">
          {bookingConfirmed ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl mb-4 text-gray-900">Booking Confirmed!</h3>
              <p className="text-xl text-gray-600 mb-2">
                Thank you, {formData.name}!
              </p>
              <p className="text-gray-600">
                Your booking for {roomTitle} has been confirmed.
              </p>
              <p className="text-gray-600 mt-4">
                We've sent a confirmation email to {formData.email}
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  Booking ID: <span className="text-gray-900">BK{Math.floor(Math.random() * 100000)}</span>
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <User size={24} className="text-blue-600" />
                    Personal Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="+91 12345 67890"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">College/University *</label>
                      <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="Enter college name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Father's Name *</label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="Enter father's name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Guardian Phone *</label>
                      <input
                        type="tel"
                        name="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Booking Details */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <Calendar size={24} className="text-blue-600" />
                    Booking Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Move-in Date *</label>
                      <input
                        type="date"
                        name="moveInDate"
                        value={formData.moveInDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Duration (Months) *</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                          <option key={month} value={month}>
                            {month} {month === 1 ? 'Month' : 'Months'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2">Emergency Contact *</label>
                      <input
                        type="tel"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="+91 12345 67890"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2">ID Proof Type *</label>
                      <select
                        name="idProof"
                        value={formData.idProof}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      >
                        <option value="">Select ID Proof</option>
                        <option value="aadhar">Aadhar Card</option>
                        <option value="pan">PAN Card</option>
                        <option value="college">College ID Card</option>
                        <option value="passport">Passport</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> You'll need to submit the original ID proof and college ID during check-in.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Summary */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <CreditCard size={24} className="text-blue-600" />
                    Payment Summary
                  </h3>

                  <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Room Type:</span>
                      <span className="text-gray-900">{roomTitle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monthly Rent:</span>
                      <span className="text-gray-900">₹{roomPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Duration:</span>
                      <span className="text-gray-900">{formData.duration} {parseInt(formData.duration) === 1 ? 'Month' : 'Months'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Total Rent:</span>
                      <span className="text-gray-900">₹{totalAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Security Deposit:</span>
                      <span className="text-gray-900">₹{securityDeposit.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-lg">
                      <span className="text-gray-900">Total Amount:</span>
                      <span className="text-blue-600">₹{grandTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="text-gray-900 mb-2">Payment Instructions:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• You can pay via UPI, Net Banking, or Cash</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-gray-900">Personal Details:</h4>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-1">
                      <p><strong>Name:</strong> {formData.name}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Phone:</strong> {formData.phone}</p>
                      <p><strong>College:</strong> {formData.college}</p>
                      <p><strong>Move-in Date:</strong> {formData.moveInDate}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 px-1 py-2 md:px-6 md:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 px-1 py-2 bg-blue-600 hover:bg-blue-700 text-white md:px-6 md:py-3 rounded-lg transition-colors"
                >
                  {step === 3 ? 'Confirm Booking' : 'Next'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
