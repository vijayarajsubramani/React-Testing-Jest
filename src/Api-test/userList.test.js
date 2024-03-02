import { render, screen } from '@testing-library/react';
import { userData } from '../_mock_/data';
import UserList from './userList';


describe('UserList Component', () => {
    test('render userlist with search term', () => {
        render(<UserList user={userData} searchTerm="vijayaraj" />);
        
        // Check if user list is rendered correctly
        const userList = screen.getByTestId('user-1'); // Assuming user IDs start from 1
        expect(userList).toBeInTheDocument();

        // Check if only one user is rendered
        const users = screen.getAllByTestId(/^user-/);
        expect(users).toHaveLength(1);

        // Check if user details are rendered correctly
        const user = userData.find((user) => user.first_name === 'vijayaraj');
        expect(screen.getByText(user.first_name)).toBeInTheDocument();
        expect(screen.getByText(user.email)).toBeInTheDocument();
        expect(screen.getByAltText(user.id.toString())).toBeInTheDocument();
    });
});
