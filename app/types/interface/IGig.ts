export interface IGig {
  id: number;
  lat: number;
  lng: number;
  overtime: boolean;
  globalNetwork: boolean;
  costGig: number;
  costHour: number;
  costActivity: number;
  description: string;
  startDate: {
    date: string;
    time: string;
    iso: string;
    timezone: string;
    timestamp: Date;
  };
  endDate: {
    date: string;
    time: string;
    iso: string;
    timezone: string;
    timestamp: Date;
  };
  active: boolean;
  completedAt?: object;
  paidAt?: object;
  maxApplicants: number;
  timezone: string;
  recurrenceCode: string;
  readyToPay: string;
  user: {
    id: number;
    displayname: string;
    avatar: string;
    phone: string;
    passwordUpdatedAt: string;
    otpActive: number;
    otpHash?: object;
    rating: number;
  };
  currency: {
    id: number;
    name: string;
    code: string;
    symbol: string;
  };
  tags: [
    {
      id: number;
      name: string;
    }
  ];
  industry: object;
  status: string;
  deliveryGig?: {
    id: number;
    dropoffLat: number;
    dropoffLng: number;
    costKm: number;
    ownVehicle: number;
    fullLicense: number;
    kms: number;
    addressId: number;
    categories?: [
      {
        id: number;
        name: string;
      },
      {
        id: number;
        name: string;
      }
    ];
    address: {
      line1: string;
      line2: string;
      state: string;
      lat: 53.2006235;
      lng: -6.1110755;
      city: string;
      countryId: 104;
      country: {
        id: 104;
        code: string;
        name: string;
        phoneCode: string;
        active: 1;
      };
      location: {
        id: 642;
        location: string;
      };
      postal_code: string;
      formatted_address: string;
    };
  };
  recurrences: Array<object>;
  address: {
    line1: string;
    line2: string;
    state: string;
    lat: number;
    lng: number;
    city: string;
    country: {
      id: number;
      code: string;
      name: string;
      phoneCode: string;
      active: number;
    };
    location: {
      id: number;
      location: string;
    };
    postal_code: string;
    formatted_address: string;
  };
  applicationId?: object;
  applied: boolean;
  distance: number;
  startingDate?: Date | null;
  endingDate?: Date | null;
}
