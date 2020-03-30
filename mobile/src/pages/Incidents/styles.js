import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20, //Para dar uma distancia do topo da tela
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
    color: '#e02041',
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 42,
    color: '#13131a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  incidentProprety: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 16,
    color: '#737380',
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e02041',
  },

});