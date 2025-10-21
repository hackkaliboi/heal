import { supabase } from './supabaseClient';

describe('Supabase Client', () => {
    test('should be defined', () => {
        expect(supabase).toBeDefined();
    });

    test('should have auth property', () => {
        expect(supabase).toHaveProperty('auth');
    });

    test('should have from method', () => {
        expect(typeof supabase.from).toBe('function');
    });
});