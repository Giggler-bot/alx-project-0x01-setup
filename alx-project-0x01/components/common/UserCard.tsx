import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">Username: {username}</p>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: {website}</p>
      <p className="text-gray-600 mt-2">
        <strong>Company:</strong> {company.name} - <em>{company.catchPhrase}</em>
      </p>
      <p className="text-gray-600">
        <strong>Address:</strong> {address.suite}, {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
