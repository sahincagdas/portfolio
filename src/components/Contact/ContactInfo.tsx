import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-blue-600 mt-1" />
        <div>
          <h4 className="text-lg font-medium text-gray-900">Adress</h4>
          <p className="mt-1 text-gray-600">
            Bursa, Türkiye
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-blue-600 mt-1" />
        <div>
          <h4 className="text-lg font-medium text-gray-900">Phone</h4>
          <p className="mt-1 text-gray-600">
            +90 (554) 264 52 06
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-blue-600 mt-1" />
        <div>
          <h4 className="text-lg font-medium text-gray-900">E-mail</h4>
          <p className="mt-1 text-gray-600">
            sahin.cagdas@outlook.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;